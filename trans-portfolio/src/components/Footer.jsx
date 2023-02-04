import React from "react";

function Footer() {
    return (
     <div>
        {/*Social Media Links*/}
        <p className="text-sm mt-2 opacity-50 text-center">
            &copy; {new Date().getFullYear()} {" "}
            Brendan Tran
            All rights reserved
        </p>
     </div>
    )
}

export default Footer;