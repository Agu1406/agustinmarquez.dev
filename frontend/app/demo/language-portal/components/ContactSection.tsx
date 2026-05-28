"use client";

import { useState } from "react";
import { FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa6";
import { Mail, MessageCircle } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { cn } from "../lib/utils";
import { BilingualHeading } from "./BilingualHeading";
import { StableI18nText } from "./StableI18nText";
import { useLanguage } from "./LanguageProvider";

const WHATSAPP = "34611291913";
const EMAIL = "clases.espanol.portal@example.com";

const SOCIAL_CHANNELS = [
  {
    id: "whatsapp",
    href: `https://wa.me/${WHATSAPP}`,
    icon: MessageCircle,
    labelUk: "WhatsApp",
    labelEs: "WhatsApp",
    className: "text-emerald-600",
  },
  {
    id: "telegram",
    href: "https://t.me/clases_espanol_ua",
    icon: FaTelegram,
    labelUk: "Telegram",
    labelEs: "Telegram",
    className: "text-sky-500",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@clases.espanol.ua",
    icon: FaTiktok,
    labelUk: "TikTok",
    labelEs: "TikTok",
    className: "text-foreground",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/clases.espanol.ua",
    icon: FaInstagram,
    labelUk: "Instagram",
    labelEs: "Instagram",
    className: "text-pink-500",
  },
] as const;

export function ContactSection() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <BilingualHeading uk="Зв'язок" es="Contacto" className="mb-4" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="bg-card/85">
          <CardHeader>
            <CardTitle>{t("Канали зв'язку", "Canales")}</CardTitle>
            <CardDescription>
              {t(
                "WhatsApp, Telegram, Instagram, TikTok та email",
                "WhatsApp, Telegram, Instagram, TikTok y email"
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {SOCIAL_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-auto w-full justify-start gap-2 border-2 border-white/85 bg-white/30 py-2.5 backdrop-blur-sm hover:bg-white/40"
                  )}
                >
                  <Icon className={cn("size-4 shrink-0", channel.className)} />
                  <span className="text-left leading-tight">
                    <StableI18nText uk={channel.labelUk} es={channel.labelEs} />
                  </span>
                </a>
              );
            })}
            <a
              href={`mailto:${EMAIL}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full justify-start gap-2 border-2 border-white/85 bg-white/30 py-2.5 backdrop-blur-sm hover:bg-white/40"
              )}
            >
              <Mail className="size-4 shrink-0" />
              <span className="text-left leading-tight">
                <StableI18nText uk="Email" es="Email" />
              </span>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-card/85">
          <CardHeader>
            <CardTitle>{t("Форма заявки", "Formulario")}</CardTitle>
            <CardDescription>{t("Форма заявки", "Formulario de contacto")}</CardDescription>
          </CardHeader>
          <CardContent>
            {sent ? (
              <Alert>
                <AlertTitle>{t("Дякуємо!", "¡Gracias!")}</AlertTitle>
                <AlertDescription>
                  {t(
                    "Повідомлення надіслано. Дякуємо за інтерес.",
                    "Mensaje enviado. Gracias por tu interés."
                  )}
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("Ім'я", "Nombre")}</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-2 border-white/75 bg-white/65 shadow-sm focus-visible:border-primary/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-2 border-white/75 bg-white/65 shadow-sm focus-visible:border-primary/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("Повідомлення", "Mensaje")}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border-2 border-white/75 bg-white/65 shadow-sm focus-visible:border-primary/80"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  {t("Надіслати", "Enviar")}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
