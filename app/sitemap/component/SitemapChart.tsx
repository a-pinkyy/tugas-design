import { Box, MultiTextBox } from "./SitemapColumn";

export default function SitemapChart() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center overflow-auto">
      <svg width="1308" height="720" viewBox="0 0 1308 720">
        <defs>
          <style>{`
            .line {
              fill: none;
              stroke-width: 3;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          `}</style>
        </defs>

        {/* Homepage */}
        <Box x={565} y={60} width={178} height={69} text="Homepage" color="#15945A" title fontSize={27} />

        {/* Main top connector */}
        <path d="M654 129 V156" stroke="#2F80ED" className="line" />

        {/* Top branches */}
        <path d="M654 156 H166 Q166 156 166 166 V191" stroke="#F4C842" className="line" />
        <path d="M407 156 V191" stroke="#FF8C32" className="line" />
        <path d="M654 156 H779 V191" stroke="#F04F55" className="line" />
        <path d="M654 156 H1044 Q1044 156 1044 166 V191" stroke="#2F80ED" className="line" />

        {/* PRODUCT */}
        <Box x={104} y={191} width={125} height={51} text="Product" color="#F4C842" title fontSize={24} />
        <path d="M166 242 V314 Q166 314 176 314 H187" stroke="#F4C842" className="line" />
        <path d="M166 263 Q166 263 176 263 H187" stroke="#F4C842" className="line" />
        <Box x={187} y={250} width={92} height={31} text="Features" color="#F4C842" fontSize={19} />
        <MultiTextBox x={187} y={288} width={119} height={52} lines={["Apps &", "Integrations"]} color="#F4C842" />

        {/* SOLUTIONS */}
        <Box x={337} y={191} width={140} height={51} text="Solutions" color="#FF8C32" title fontSize={24} />
        <path d="M407 242 V498 Q407 498 417 498 H426" stroke="#FF8C32" className="line" />
        <path d="M407 263 Q407 263 417 263 H426" stroke="#FF8C32" className="line" />

        <Box x={426} y={250} width={91} height={31} text="By Team" color="#FF8C32" fontSize={18} />

        <path d="M471 281 V458 Q471 458 481 458 H492" stroke="#FF8C32" className="line" />
        <path d="M471 302 Q471 302 481 302 H492" stroke="#FF8C32" className="line" />
        <path d="M471 341 Q471 341 481 341 H492" stroke="#FF8C32" className="line" />
        <path d="M471 381 Q471 381 481 381 H492" stroke="#FF8C32" className="line" />
        <path d="M471 421 Q471 421 481 421 H492" stroke="#FF8C32" className="line" />
        <path d="M471 458 Q471 458 481 458 H492" stroke="#FF8C32" className="line" />

        <Box x={492} y={289} width={178} height={31} text="Product Management" color="#FF8C32" fontSize={17} />
        <Box x={492} y={328} width={100} height={31} text="Marketing" color="#FF8C32" fontSize={17} />
        <Box x={492} y={368} width={81} height={31} text="Design" color="#FF8C32" fontSize={17} />
        <Box x={492} y={408} width={116} height={31} text="Engineering" color="#FF8C32" fontSize={17} />
        <Box x={492} y={445} width={68} height={31} text="Sales" color="#FF8C32" fontSize={17} />

        <Box x={426} y={484} width={124} height={31} text="By Use Case" color="#FF8C32" fontSize={17} />

        <path d="M488 515 V616 Q488 616 498 616 H509" stroke="#FF8C32" className="line" />
        <path d="M488 537 Q488 537 498 537 H509" stroke="#FF8C32" className="line" />
        <path d="M488 576 Q488 576 498 576 H509" stroke="#FF8C32" className="line" />
        <path d="M488 616 Q488 616 498 616 H509" stroke="#FF8C32" className="line" />

        <Box x={509} y={523} width={115} height={31} text="Use Case 1" color="#FF8C32" fontSize={17} />
        <Box x={509} y={562} width={115} height={31} text="Use Case 2" color="#FF8C32" fontSize={17} />
        <Box x={509} y={602} width={115} height={31} text="Use Case 3" color="#FF8C32" fontSize={17} />

        {/* RESOURCES */}
        <Box x={699} y={191} width={158} height={51} text="Resources" color="#F04F55" title fontSize={24} />
        <path d="M779 242 V499 Q779 499 789 499 H798" stroke="#F04F55" className="line" />

        <path d="M779 263 Q779 263 789 263 H798" stroke="#F04F55" className="line" />
        <path d="M779 302 Q779 302 789 302 H798" stroke="#F04F55" className="line" />
        <path d="M779 341 Q779 341 789 341 H798" stroke="#F04F55" className="line" />
        <path d="M779 381 Q779 381 789 381 H798" stroke="#F04F55" className="line" />
        <path d="M779 421 Q779 421 789 421 H798" stroke="#F04F55" className="line" />
        <path d="M779 460 Q779 460 789 460 H798" stroke="#F04F55" className="line" />
        <path d="M779 499 Q779 499 789 499 H798" stroke="#F04F55" className="line" />

        <Box x={798} y={250} width={63} height={31} text="Blog" color="#F04F55" fontSize={17} />
        <Box x={798} y={289} width={61} height={31} text="FAQ" color="#F04F55" fontSize={17} />
        <Box x={798} y={328} width={73} height={31} text="Guides" color="#F04F55" fontSize={17} />
        <Box x={798} y={368} width={126} height={31} text="Case Studies" color="#F04F55" fontSize={17} />
        <Box x={798} y={408} width={102} height={31} text="Templates" color="#F04F55" fontSize={17} />
        <Box x={798} y={447} width={110} height={31} text="Community" color="#F04F55" fontSize={17} />
        <Box x={798} y={486} width={84} height={31} text="Support" color="#F04F55" fontSize={17} />

        {/* OTHER PAGES */}
        <Box x={956} y={191} width={175} height={51} text="Other Pages" color="#2F80ED" title fontSize={24} />
        <path d="M1044 242 V380 Q1044 380 1054 380 H1064" stroke="#2F80ED" className="line" />

        <path d="M1044 263 Q1044 263 1054 263 H1064" stroke="#2F80ED" className="line" />
        <path d="M1044 302 Q1044 302 1054 302 H1064" stroke="#2F80ED" className="line" />
        <path d="M1044 341 Q1044 341 1054 341 H1064" stroke="#2F80ED" className="line" />
        <path d="M1044 380 Q1044 380 1054 380 H1064" stroke="#2F80ED" className="line" />

        <Box x={1064} y={250} width={95} height={31} text="About Us" color="#2F80ED" fontSize={17} />
        <Box x={1064} y={289} width={103} height={31} text="Enterprise" color="#2F80ED" fontSize={17} />
        <Box x={1064} y={328} width={78} height={31} text="Pricing" color="#2F80ED" fontSize={17} />
        <Box x={1064} y={367} width={136} height={31} text="Sign Up/Log In" color="#2F80ED" fontSize={17} />
      </svg>
    </div>
  );
}