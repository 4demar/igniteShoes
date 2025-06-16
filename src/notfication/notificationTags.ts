import { OneSignal } from "react-native-onesignal";

export function tagUserEmailCreate(email: string) {
    OneSignal.User.addTag("user_email", email)
}

export function tagUserEmailRemove(email: string) {
    OneSignal.User.removeTag(email)
}

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        user_name: 'Teste',
        user_email: 'teste@teste.com.br',
    })
}