export const TopPanel = () => (
  <svg
    viewBox="0 0 900 900"
    xmlns="http://www.w3.org/2000/svg"
    className="size-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="topSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5c4c40" />
        <stop offset="50%" stopColor="#8c6e53" />
        <stop offset="100%" stopColor="#c0a988" />
      </linearGradient>
      <linearGradient id="topColumns" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d6c6aa" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8f7a60" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="veilGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f6e7d6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#d8c2aa" stopOpacity="0.35" />
      </linearGradient>
      <radialGradient id="faceGlow" cx="0.4" cy="0.3" r="0.45">
        <stop offset="0%" stopColor="#f4d5b8" />
        <stop offset="100%" stopColor="#c28f6b" />
      </radialGradient>
      <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2c1c16" />
        <stop offset="100%" stopColor="#4b2b20" />
      </linearGradient>
    </defs>

    <rect width="900" height="900" fill="url(#topSky)" />
    <g opacity="0.75">
      {[...Array(5)].map((_, index) => (
        <rect
          key={index}
          x={80 + index * 160}
          y={0}
          width={90}
          height={900}
          fill="url(#topColumns)"
          opacity={0.4 + index * 0.08}
        />
      ))}
    </g>

    <g filter="url(#softShadow)">
      <path
        d="M540 840C520 780 540 650 520 580 500 510 440 470 360 470 260 470 220 530 220 610 220 690 270 770 360 810 440 840 520 870 540 840Z"
        fill="url(#veilGradient)"
        opacity="0.85"
      />
      <path
        d="M350 770C360 690 340 640 330 600 310 520 330 460 360 430 410 380 500 360 550 400 590 430 600 510 590 560 580 620 550 710 540 780 530 820 480 840 430 830 380 820 350 810 350 770Z"
        fill="url(#veilGradient)"
        opacity="0.6"
      />
      <path
        d="M380 600C410 640 470 670 520 660 540 650 580 610 580 580 580 540 530 500 500 480 470 460 430 450 390 460 350 470 320 500 320 540 320 560 340 580 360 590 370 600 370 600 380 600Z"
        fill="url(#faceGlow)"
      />
    </g>

    <path
      d="M430 450C480 430 520 420 560 430 610 440 620 500 590 510 560 520 520 520 490 530 460 540 430 550 400 540 370 530 360 470 430 450Z"
      fill="url(#hairGradient)"
      opacity="0.95"
    />

    <path
      d="M300 530C330 520 360 510 380 520 410 540 410 600 380 620 360 630 330 630 310 620 300 610 280 580 300 530Z"
      fill="url(#veilGradient)"
      opacity="0.75"
    />

    <path
      d="M540 620C570 620 640 600 660 600 700 600 700 640 660 660 620 680 540 700 520 700 500 700 480 660 500 640 520 620 520 620 540 620Z"
      fill="url(#veilGradient)"
      opacity="0.5"
    />

    <path
      d="M360 620C360 620 320 600 290 580 260 560 230 530 230 500 230 450 280 420 320 430 360 440 390 470 400 500 410 530 380 620 360 620Z"
      fill="url(#veilGradient)"
      opacity="0.3"
    />

    <defs>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="15" result="blur" />
      </filter>
    </defs>
  </svg>
);

export const MiddlePanel = () => (
  <svg
    viewBox="0 0 900 1000"
    xmlns="http://www.w3.org/2000/svg"
    className="size-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="midSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7a5a3a" />
        <stop offset="45%" stopColor="#c18b4e" />
        <stop offset="100%" stopColor="#3c2e24" />
      </linearGradient>
      <linearGradient id="midColumns" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d3af7b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#7a5a3d" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="midVeil" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f6e0c7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#d4b492" stopOpacity="0.25" />
      </linearGradient>
      <linearGradient id="midDress" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stopColor="#f5dac3" />
        <stop offset="100%" stopColor="#b68c6b" />
      </linearGradient>
      <linearGradient id="midGround" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4e2f1f" />
        <stop offset="50%" stopColor="#7b5538" />
        <stop offset="100%" stopColor="#3c2415" />
      </linearGradient>
    </defs>

    <rect width="900" height="1000" fill="url(#midSky)" />

    <rect y="680" width="900" height="320" fill="url(#midGround)" opacity="0.9" />

    <g opacity="0.85">
      {[...Array(6)].map((_, index) => (
        <rect
          key={index}
          x={50 + index * 130}
          y={120}
          width={90}
          height={800}
          rx={18}
          fill="url(#midColumns)"
          opacity={0.4 + index * 0.07}
        />
      ))}
    </g>

    <rect
      x="700"
      y="200"
      width="70"
      height="520"
      fill="url(#midColumns)"
      opacity="0.75"
    />
    <polygon
      points="735,120 770,200 700,200"
      fill="url(#midColumns)"
      opacity="0.8"
    />

    <g opacity="0.65">
      <path
        d="M260 910C240 760 270 630 310 560 360 480 450 440 520 460 600 480 640 560 650 640 660 720 620 840 600 910 580 980 540 1020 470 1020 390 1020 280 1020 260 910Z"
        fill="url(#midDress)"
      />
      <path
        d="M220 710C260 640 330 600 410 600 500 600 590 640 640 700 670 740 640 820 600 840 540 860 430 850 320 840 250 830 190 800 220 710Z"
        fill="url(#midVeil)"
      />
      <path
        d="M340 520C340 470 360 430 400 410 440 390 520 380 580 410 620 430 640 470 640 520 640 560 600 600 520 600 440 600 340 590 340 520Z"
        fill="#3a261c"
        opacity="0.85"
      />
      <path
        d="M240 700C210 780 200 850 210 900 220 950 260 980 310 980 360 980 380 940 360 900 330 840 300 780 240 700Z"
        fill="url(#midVeil)"
        opacity="0.6"
      />
      <path
        d="M600 620C640 650 680 700 700 760 720 820 700 860 660 860 620 860 560 840 520 820 480 800 470 760 500 720 540 660 560 640 600 620Z"
        fill="url(#midVeil)"
        opacity="0.4"
      />
    </g>
  </svg>
);

export const BottomPanel = () => (
  <svg
    viewBox="0 0 900 700"
    xmlns="http://www.w3.org/2000/svg"
    className="size-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="bottomStone" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5f5142" />
        <stop offset="100%" stopColor="#3a3128" />
      </linearGradient>
      <linearGradient id="bottomFace" x1="0.3" y1="0.2" x2="0.9" y2="0.9">
        <stop offset="0%" stopColor="#f6d8c0" />
        <stop offset="70%" stopColor="#c59a78" />
        <stop offset="100%" stopColor="#9a6c4f" />
      </linearGradient>
      <linearGradient id="bottomHair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#251712" />
        <stop offset="100%" stopColor="#3d241c" />
      </linearGradient>
      <linearGradient id="bottomVeil" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f3decb" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#d2b79a" stopOpacity="0.3" />
      </linearGradient>
    </defs>

    <rect width="900" height="700" fill="url(#bottomStone)" />

    <g opacity="0.35">
      {[...Array(4)].map((_, index) => (
        <rect
          key={index}
          x={80 + index * 180}
          y={40}
          width={120}
          height={620}
          rx={18}
          fill="#7a6a57"
          opacity={0.2 + index * 0.1}
        />
      ))}
    </g>

    <path
      d="M260 580C200 520 180 450 220 400 260 340 360 320 430 330 500 340 560 380 600 430 640 480 640 560 600 610 560 660 470 680 400 660 340 640 300 620 260 580Z"
      fill="url(#bottomVeil)"
      opacity="0.7"
    />

    <path
      d="M370 530C330 470 330 410 360 360 390 310 450 280 510 280 570 280 630 320 650 380 670 440 640 510 590 540 540 570 450 580 390 560 380 550 380 550 370 530Z"
      fill="url(#bottomFace)"
    />

    <path
      d="M360 340C380 300 420 270 470 260 520 250 600 250 640 300 680 350 660 430 620 430 580 430 540 420 500 430 460 440 440 460 410 430 380 400 340 380 360 340Z"
      fill="url(#bottomHair)"
    />

    <path
      d="M510 360C540 350 560 330 580 340 600 350 610 380 590 390 560 410 520 400 500 400 480 400 460 370 510 360Z"
      fill="#352119"
      opacity="0.8"
    />

    <path
      d="M430 460C450 440 480 420 520 420 560 420 560 480 540 500 520 520 480 520 460 520 440 520 420 490 430 460Z"
      fill="url(#bottomVeil)"
      opacity="0.65"
    />

    <path
      d="M340 420C310 410 280 390 270 360 260 330 280 300 310 300 350 300 380 320 400 350 420 380 380 430 340 420Z"
      fill="url(#bottomVeil)"
      opacity="0.45"
    />
  </svg>
);
