export const isLogin = () => ({
    type: "LOGIN",
    value: true,
    layoutDisplay: '마이페이지'
});
export const isLogout = () => ({
    type: "LOGOUT",
    value: false,
    layoutDisplay: '로그인'

});