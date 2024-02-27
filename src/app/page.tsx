import Chat from "../components/chat";
import SelectCharacter from "@/components/selectCharacter";
import FooterChat from "@/components/footerChat";

export const runtime = "edge";

export default function Page() {
  return (
    <main className=" flex min-h-screen min-w-full justify-center bg-slate-900">
      <div className="flex-1   ">
        {/* Contenido flexible que se contraerá */}
      </div>
      <div className="min-w-lg mx-auto w-full max-w-2xl flex-shrink-0">
        <div className="flex-none">
          <Chat />
        </div>
      </div>
      <div className=" flex-1 flex-shrink lg:flex-grow xl:flex xl:flex-shrink">
        <div className=" fixed hidden xl:block">
          <FooterChat />
        </div>
      </div>
    </main>
  );
}
