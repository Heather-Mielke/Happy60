interface BirthdayPartyModeButtonProps {
  triggerConfetti: () => void;
}

const BirthdayPartyModeButton = ({
  triggerConfetti,
}: BirthdayPartyModeButtonProps) => (
  <div className="text-center">
    <button
      onClick={triggerConfetti}
      className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-green-500 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-6 px-10 rounded-none text-lg shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-pulse border-4 border-[#e09c2b]"
      style={{ fontFamily: "Montserrat, Arial, Helvetica, sans-serif" }}
    >
      🎊 BIRTHDAY PARTY MODE! 🎊
    </button>
    <p className="text-sm text-orange-200 mt-2 animate-bounce">
      Click for epic confetti explosion!
    </p>
  </div>
);

export default BirthdayPartyModeButton;
