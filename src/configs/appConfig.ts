import { Mode } from "@/@core/layouts/types";

type AppConfig ={
    projectName: string,
    mode: Mode,
    skin: string
}

const appConfig:AppConfig = {
    projectName: 'NIC APP',
    mode: 'light',
    skin: 'default'
}

export default appConfig;