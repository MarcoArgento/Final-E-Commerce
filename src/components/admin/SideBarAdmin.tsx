import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useContext } from "react";
import { AppContext } from "../../Context";
function SideBarAdmin() {
  const { isAdmin, logout, gestProva, mostra, setMostra, prova } =
    useContext(AppContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div></div>
        {isAdmin && (
          <>
            <button
              type="button"
              onClick={() => {
                gestProva();
                if (mostra) setMostra(false);
              }}
            >
              ADMIN
            </button>
            <button
              type="button"
              onClick={() => {
                setMostra(!mostra);
                if (prova) gestProva();
              }}
            >
              EDITOR
            </button>
            <button
              type="button"
              onClick={() => {
                logout();
                if (prova) gestProva;
                if (mostra) setMostra(false);
                logout();
              }}
            >
              LOGOUT
            </button>
          </>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AccountCircleIcon />
          <LocalMallIcon />
        </div>
      </div>
    </div>
  );
}
export default SideBarAdmin;
