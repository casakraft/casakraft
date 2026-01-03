import BodyT from "./Components/BodyT";
import ThankYouTracker from "./Components/ThankYouTracker";

export default function ThankYouPage() {
  return (
    <main className="bg-[#f5ede5] min-h-[70vh] flex items-center">
      <ThankYouTracker />
      <BodyT />
    </main>
  );
}
