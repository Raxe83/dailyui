"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

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
      <h1 className="text-3xl font-bold mb-6 text-center">
        Kontaktieren Sie uns
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
      <Button type="submit">Absenden</Button>
    </form>
  );
}
