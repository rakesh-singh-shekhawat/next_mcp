import dynamic from "next/dynamic";

const ClientComponent = dynamic(() => import("./clientComp"), { ssr: false });
const ModalClientComponent = dynamic(() => import("./modalClient"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    <div>
      <ClientComponent />
      <ModalClientComponent />
    </div>
  );
};

export default Dashboard;
