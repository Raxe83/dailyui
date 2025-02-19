import React, { useState, useEffect } from "react";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Textarea } from "./ui/Textarea";
import Button from "./ui/CustomButton";
import { useUser } from "../user/UserContext";
import Checkbox from "./ui/Checkbox";
import emailjs from "emailjs-com";
import { useToast } from "../notification/ToastProvider";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const user = useUser();
  emailjs.init("cnU228T6RzrtEtzDA");

  const [name, setName] = useState(sessionStorage.getItem("name") || "");
  const [email, setEmail] = useState(sessionStorage.getItem("email") || "");
  const [projectDescription, setProjectDescription] = useState(
    sessionStorage.getItem("projectDescription") || ""
  );
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  useEffect(() => {
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("projectDescription", projectDescription);
  }, [name, email, projectDescription]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Bitte akzeptieren Sie die Datenschutzrichtlinien.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_djqud4d",
        "template_3yeglo7",
        {
          name,
          email,
          projectDescription,
          plan: user?.selectedPlan || "Kein Plan gewählt",
          price: user?.price || "0 €",
        },
        "cnU228T6RzrtEtzDA"
      )
      .then(
        (response) => {
          console.log("E-Mail gesendet:", response);
          sessionStorage.removeItem("name");
          sessionStorage.removeItem("email");
          sessionStorage.removeItem("projectDescription");
          setName("");
          setEmail("");
          setProjectDescription("");
          setIsChecked(false);
          toast.showToast({
            type: "success",
            header: "E-Mail gesendet",
            message: "Ihre E-Mail wurde erfolgreich gesendet.",
          });
          setLoading(false);
        },
        (error) => {
          console.log("E-Mail-Fehler:", error);
          toast.showToast({
            type: "error",
            header: "E-Mail-Fehler",
            message: "Ihre E-Mail konnte nicht gesendet werden.",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 my-12 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg relative"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
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

        {user?.selectedPlan ? (
          <div className="flex items-center justify-center">
            <p className="text-gray-600 font-semibold">Ausgewählter Plan:</p>
            <span className="bg-blue-500 ml-auto font-semibold text-white text-sm px-4 py-2 rounded-full shadow-md">
              {user?.selectedPlan}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-gray-600 font-semibold">Kein Plan ausgewählt</p>
            <Link
              to="/#pricing"
              className="text-blue-500 underline ml-auto font-semibold"
            >
              Pläne anzeigen
            </Link>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="text-gray-700 text-sm">
            Ich akzeptiere die{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Privacy"
              className="text-blue-500 underline"
            >
              Datenschutzrichtlinien
            </a>
          </span>
        </div>

        {user?.price! > 0 && (
          <div className="text-gray-700 font-semibold">
            Gesamtpreis: {user?.price} €
          </div>
        )}

        <Button
          color={"primary"}
          round="large"
          text={loading ? "Senden..." : "Absenden"}
          disabled={
            loading || !name || !email || !projectDescription || !isChecked
          }
          onClick={() => {}}
        />

        {/* Lade-Overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </form>
    </div>
  );
}
