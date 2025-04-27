import { useRiderStore } from "@/store/riderStorage";
import { tokenStorage } from "@/store/store";
import { useUserStore } from "@/store/userStore";
import { resetAndNavigate } from "@/utils/Helpers";

export const logout = async (disconnect?: () => void) => {
    if (disconnect) {
        disconnect();
    }
    const { clearData } = useUserStore.getState();
    const { clearRiderData } = useRiderStore.getState();

    // Manually remove the tokens
    await tokenStorage.removeItem("access_token");
    await tokenStorage.removeItem("refresh_token");

    clearRiderData();
    clearData();
    resetAndNavigate("/role");
};
