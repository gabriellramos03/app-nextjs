import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login/LoginForm"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10 bg-muted bg-cover bg-center bg-fixed bg-[url('/fundo.jpg')]">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Conecte & Certifique
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
