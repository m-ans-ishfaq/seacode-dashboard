import { Link } from "react-router-dom"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const SideBarItem = ({ label, href }) => (
    <Link to={href} className="w-full p-4 font-medium text-slate-300 hover:bg-slate-800">
        {label}
    </Link>
);

export function SideBar() {
    
    return (
        <aside className="px-12 pt-12 pb-4 border-r border-r-slate-800 flex flex-col">
            <Link to="/" className="text-xl font-bold">
                Seacode Dashboard
            </Link>
            <div className="mt-8 flex flex-col divide-y divide-slate-400 divide-opacity-25">
                <SideBarItem label="Quotes" href="/quotes" />
                <SideBarItem label="View All Users" href="/users" />
                <SideBarItem label="Contact Us" href="/contact-us" />
                <Accordion type="single" collapsible>
                    <AccordionItem value="item" className="border-b-neutral-50 border-b border-opacity-10 text-slate-300">
                        <AccordionTrigger className="text-base hover:no-underline hover:bg-slate-800 p-4">
                            About Us
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col pb-0 divide-y divide-neutral-50 divide-opacity-10">
                            <SideBarItem href="/privacy-policy" label="Privacy Policy" />
                            <SideBarItem href="/terms-of-services" label="Terms of Services" />
                            <SideBarItem href="/help-and-support" label="Help & Support" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </aside>
    )
}