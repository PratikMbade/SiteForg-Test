import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AtSign,
  CodeXml,
  Database,
  Globe,
  KeySquare,
  LayoutIcon,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import { SiWalletconnect } from "react-icons/si";

export function FeaturesToggle() {
  return (
    <div className=" flex flex-col items-center justify-center my-16 w-screen bg-stone-200 dark:bg-zinc-800 py-10">
      <div className="mb-10  max-w-4xl mx-auto ">
        <h1 className="font-extrabold text-xl md:text-5xl  text-neutral-600 ">
          Boost your app instantly, launch quicker, and start earning
        </h1>
        <p className="text-md md:text-xl max-w-4xl font-semibold text-neutral-500 my-3">
          Authenticate users 🔐, handle payments, and send emails in record
          time. Spend your energy growing your startup, not wrestling with API
          integrations. ShipFast equips you with the boilerplate code to launch
          quickly 🏃‍♂️!
        </p>
        <Tabs
          defaultValue="template"
          className="max-w-4xl flex  flex-col items-center justify-center gap-y-10  bg-none my-5 "
        >
          <TabsList className="w-full flex flex-wrap items-start  justify-start gap-x-8 bg-transparent  ">
            <TabsTrigger className="bg-transparent" value="template">
              <div className="flex flex-col items-center justify-center ">
                <LayoutIcon className="w-10 h-10" />
                <p>Components</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="auth">
              <div className="flex flex-col items-center justify-center ">
                <UserCheck className="w-10 h-10" />
                <p>Next-Auth</p>
              </div>
            </TabsTrigger>

            <TabsTrigger value="web3">
              <div className="flex flex-col items-center justify-center ">
                <SiWalletconnect className="w-10 h-10" />
                <p>Web3</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="email">
              <div className="flex flex-col items-center justify-center ">
                <AtSign className="w-10 h-10" />
                <p>Email</p>
              </div>
            </TabsTrigger>

            <TabsTrigger value="database">
              <div className="flex flex-col items-center justify-center ">
                <Database className="w-10 h-10" /> <p>Database</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="code">
              <div className="flex flex-col items-center justify-center ">
                <CodeXml className="w-10 h-10" />
                <p>Clean Code</p>
              </div>
            </TabsTrigger>

            <TabsTrigger value="deploy">
              <div className="flex flex-col items-center justify-center ">
                <Globe className="w-10 h-10" />
                <p>Deploy</p>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="template" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col gap-y-3">
                <li>
                  ✔️ Create reusable, modular components with Tailwind's utility
                  classes for efficient development.
                </li>
                <li>
                  ✔️ Tailwind integrates smoothly into TSX, allowing for easy
                  inline styling in React components.
                </li>
                <li>
                  ✔️ Apply conditional styles based on component state,
                  enhancing interactivity with Tailwind utilities.
                </li>
                <li>
                  ✔️ Tailwind's responsive utilities ensure your components
                  adapt to all screen sizes effortlessly.
                </li>
                <li>
                  ✔️ Maintain design consistency across your app by leveraging
                  Tailwinds predefined utility classes.
                </li>
                
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="auth" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Easily implement authentication with NextAuth, supporting
                  multiple providers like Google, GitHub, and more.
                </li>
                <li>
                  ✔️ The new Auth.js v5 provides enhanced security features,
                  including JWT and session-based authentication.
                </li>
                <li>
                  ✔️ Customizable sign-in, sign-out, and authentication
                  callbacks to tailor the flow to your app's needs.
                </li>
                <li>
                  ✔️ Supports OAuth, email, and credentials-based logins for
                  flexibility in handling different authentication methods.
                </li>
                <li>
                  ✔️ Auth.js v5 improves token management, making it easier to
                  refresh tokens and manage user sessions.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="web3" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Effortlessly integrate Web3 authentication, enabling users
                  to log in with their crypto wallets.
                </li>
                <li>
                  ✔️ The Web3 adapter supports various wallet providers like
                  MetaMask, Phantom, and more.
                </li>
                <li>
                  ✔️ Web3 authentication facilitates interactions with Ethereum
                  dApps, allowing for transactions.
                </li>
                <li>
                  ✔️ Easily manage user sessions and account details through
                  wallet-based authentication.
                </li>
                <li>
                  ✔️ Support for Solana enables quick and secure transactions
                  within the Solana ecosystem
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="email" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Easily send and manage transactional emails with Emailgun's
                  robust API.
                </li>
                <li>
                  ✔️ Utilize email tracking features to monitor open rates and
                  user engagement.
                </li>
                <li>
                  ✔️ Set up customizable templates for personalized email
                  campaigns and notifications.
                </li>
                <li>
                  ✔️ Ensure high deliverability rates with Emailgun's advanced
                  spam filtering and authentication tools.
                </li>
                <li>
                  ✔️ Access detailed analytics and reporting to optimize your
                  email strategies.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="database" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Supabase provides a powerful and easy-to-use interface for
                  PostgreSQL, enabling real-time data management.
                </li>
                <li>
                  ✔️ PostgreSQL offers robust relational database features,
                  ensuring data integrity and complex querying capabilities.
                </li>
                <li>
                  ✔️ MongoDB supports flexible schema design, making it ideal
                  for handling unstructured data.
                </li>
                <li>
                  ✔️ Supabase includes built-in authentication, storage, and
                  APIs, streamlining backend development.
                </li>
                <li>
                  ✔️ Easily switch between SQL and NoSQL databases depending on
                  your application needs, enhancing flexibility.
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="code" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Leverage TypeScript's static typing to catch errors early
                  and improve code quality in React and Next.js applications.
                </li>
                <li>
                  ✔️ Utilize component-based architecture in React to promote
                  reusability and maintainability.
                </li>
                <li>
                  ✔️ Follow best practices for file organization and naming
                  conventions to enhance code readability.
                </li>
                <li>
                  ✔️ Implement hooks and context for state management, reducing
                  prop drilling and enhancing component logic.
                </li>
                <li>
                  ✔️ Use Next.js features like API routes and dynamic routing to
                  create clean and efficient server-side code.
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="deploy" className="bg-transparent w-full">
            <div className=" py-20">
              <ul className="flex flex-col  gap-y-3">
                <li>
                  ✔️ Seamlessly deploy your Next.js applications on Vercel with
                  one-click deployments from GitHub.
                </li>
                <li>
                  ✔️ Enjoy automatic scaling, ensuring your app can handle
                  traffic spikes without manual intervention.
                </li>
                <li>
                  ✔️ Utilize Vercel's built-in CDN for fast global content
                  delivery, enhancing performance for end-users.
                </li>
                <li>
                  ✔️ Access real-time analytics and performance monitoring to
                  optimize your application post-deployment.
                </li>
                <li>
                  ✔️ Simplify collaboration with team features, allowing for
                  easy previews and feedback on pull requests.
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>


  );
}
