import { account } from "../../lib/appwrite";

const resetLinkAction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");

    try {
        await account.createRecovery(email, `${location.origin}/reset-password`);

        return {
            ok: true,
            message: "A reset link has been sent to your email. Please check your inbox.",
        }
    } catch (error) {
        console.error("Error sending reset link:", error);
        return {
            ok: false,
            message: "Failed to send reset link. Please try again later.",
        }
    }
}

export default resetLinkAction;