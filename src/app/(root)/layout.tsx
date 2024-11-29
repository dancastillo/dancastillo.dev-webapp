import Navbar from "@/components/navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans md:container md:mx-auto md:px-4">
      <Navbar />
      {children}
    </main>
  );
}
