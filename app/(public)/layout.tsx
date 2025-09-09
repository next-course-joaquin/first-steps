import { NavBar } from "@/components/index";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center p-24"> 
        <span className="text-4xl font-bold">Hello World</span>
        {children} 
      </main>
    </div>
  );
}