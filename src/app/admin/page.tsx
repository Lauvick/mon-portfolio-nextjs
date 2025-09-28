"use client";

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { firestore, app } from "@/lib/firebase";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

async function getContactMessages(): Promise<ContactMessage[]> {
  const contactsCollection = collection(firestore, "contacts");
  const q = query(contactsCollection, orderBy("submittedAt", "desc"));
  
  try {
    const querySnapshot = await getDocs(q);
    
    const messages = querySnapshot.docs.map(doc => {
      const data = doc.data();
      const submittedAt = data.submittedAt;
      let formattedDate = 'Date non disponible';
      
      if (submittedAt instanceof Timestamp) {
        const submittedAtDate = submittedAt.toDate();
        formattedDate = formatDistanceToNow(submittedAtDate, { addSuffix: true, locale: fr });
      }

      return {
        id: doc.id,
        name: data.name,
        email: data.email,
        message: data.message,
        submittedAt: formattedDate,
      };
    });
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    // Return empty array or handle error as needed
    return [];
  }
}


function AdminDashboard() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedMessages = await getContactMessages();
        setMessages(fetchedMessages);
      } catch (err) {
        setError("Erreur lors de la récupération des messages. Vérifiez les règles de sécurité Firestore.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive text-center py-10">{error}</p>
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead className="w-[200px]">Nom</TableHead>
            <TableHead className="w-[250px]">Email</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.length > 0 ? (
            messages.map(msg => (
              <TableRow key={msg.id}>
                <TableCell className="font-medium">{msg.submittedAt}</TableCell>
                <TableCell>{msg.name}</TableCell>
                <TableCell>{msg.email}</TableCell>
                <TableCell>{msg.message}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                Aucun message pour le moment.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}


function Auth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.error("Authentication error:", error);
    });
  };

  const handleSignOut = () => {
    auth.signOut();
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <h1 className="text-2xl font-bold">Accès Administrateur</h1>
        <p>Veuillez vous connecter pour voir les messages.</p>
        <Button onClick={handleSignIn}>Se connecter avec Google</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Messages reçus</h1>
        <Button variant="outline" onClick={handleSignOut}>Se déconnecter</Button>
      </div>
      <AdminDashboard />
    </div>
  );
}


export default function AdminPage() {
  return <Auth />;
}
