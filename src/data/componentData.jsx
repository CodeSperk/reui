import ButtonPrimary from "@/components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "@/components/Buttons/ButtonSecondary/ButtonSecondary";
import CoolHoverButton from "@/components/Buttons/CoolHoverButton/CoolHoverButton";
import BasicCard from "@/components/Cards/BasicCard/BasicCard";
import PrimaryCard from "@/components/Cards/PrimaryCard/PrimaryCard";

export const componentsData = [
  {
    category: "button",
    uid: "PrimaryBtn",
    name: 'Primary Button',
    component: ButtonPrimary,
    description: 'A primary button with default styles for your app.',
    tailwindCode: '<button class="bg-blue-500 text-white p-2 rounded">Primary Button</button>',
    muiCode: '<Button variant="contained">Primary Button</Button>',
    vanillaCode: '<button>Primary Button</button>',
  },
  {
    category: "button",
    uid: "SecondaryBtn",
    name: 'Secondary Button',
    component: ButtonSecondary,
    description: 'A secondary button with a less prominent style.',
    tailwindCode: '<button class="bg-gray-500 text-white p-2 rounded">Secondary Button</button>',
    muiCode: '<Button variant="outlined">Secondary Button</Button>',
    vanillaCode: '<button>Secondary Button</button>',
  },
  {
    category: "button",
    uid: "CoolBtn",
    name: 'Cool Hover Button',
    component: CoolHoverButton,
    description: 'A button with a cool hover effect.',
    tailwindCode: '<button class="bg-green-500 text-white p-2 rounded hover:bg-green-700">Cool Hover Button</button>',
    muiCode: '<Button variant="contained" sx={{ "&:hover": { bgcolor: "green" } }}>Cool Hover Button</Button>',
    vanillaCode: '<button class="cool-hover">Cool Hover Button</button>',
  },
  {
    category: "card",
    uid: "PrimaryCard",
    name: 'Primary Card',
    component: PrimaryCard,
    description: 'A card component that displays content in a structured way.',
    tailwindCode: '<div class="p-4 bg-white border rounded-lg shadow-md">Primary Card</div>',
    muiCode: '<Card variant="outlined"><CardContent>Primary Card</CardContent></Card>',
    vanillaCode: '<div class="card">Primary Card</div>',
  },
  {
    category: "card",
    uid: "BasicCard",
    name: 'Basic Card',
    component: BasicCard,
    description: 'A simple card for displaying content.',
    tailwindCode: '<div class="p-4 bg-gray-100 border rounded-lg shadow-sm">Basic Card</div>',
    muiCode: '<Card><CardContent>Basic Card</CardContent></Card>',
    vanillaCode: '<div class="basic-card">Basic Card</div>',
  },
];
