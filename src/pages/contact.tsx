import { NextPage } from "next";
import Default from '@layout/Default/Default';
import Contact from '@template/Contact/Contact';

const ContactPage: NextPage = () => (
    <Default>
        <Contact />
    </Default>
);

export default ContactPage;