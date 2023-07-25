import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div classname="border-b">
            <div className="flex h-16 items-center px-4">
                <div>
                    This will be a store switcher
                </div>
                <div>
                    This will be a routes
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <UserButton />
                </div>
            </div>
        </div>
    );
}

export default Navbar;