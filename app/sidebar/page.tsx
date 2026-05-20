import SidebarCard from "./componen/SidebarCard";

export default function SidebarPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <SidebarCard />
    </main>
  );
}
