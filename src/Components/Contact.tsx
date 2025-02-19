"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import Button from "./ui/CustomButton";
import { useUser } from "../user/UserContext";
import UnderConstructionOverlay from "./ui/UnderConstructionOverlay";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const user = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", { name, email, projectDescription });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setProjectDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 my-12 max-w-md mx-auto">
        <UnderConstructionOverlay message="Das Kontakformular wird noch bearbeitet" />
      <h1 className="text-3xl font-bold mb-6 text-center">
        Kontaktieren Sie uns!
      </h1>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">E-Mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="projectDescription">Projektbeschreibung</Label>
        <Textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
          rows={4}
        />
      </div>
      <div>+ {user?.selectedPlan}</div>
      <div className="flex flex-row">Zusatzleistungen <p className="text-gray-400 text-sm ml-1">(Optional)</p></div>
      <ul>
        <li onClick={()=> {user?.setPrice(user.price + 150)}}>Logo-Design: ab 150 €</li>
        <li onClick={()=> {user?.setMonthlyPrice(user.monthlyPrice + 50)}}>Wartung & Updates: ab 50 €/Monat</li>
        <li onClick={()=> {user?.setMonthlyPrice(user.monthlyPrice + 20)}}>Hosting & Domain-Einrichtung: auf Anfrage</li>
      </ul>

      <div>Gesamt Preis: {user?.price}</div>
      {user?.monthlyPrice ? <div>Monatlicher Preis: {user?.monthlyPrice}</div>: <div></div>}
      <Button
        color={"daily_ui"}
        round="full"
        onClick={() => {}}
        text="Absenden"
      />
    </form>
  );
}
