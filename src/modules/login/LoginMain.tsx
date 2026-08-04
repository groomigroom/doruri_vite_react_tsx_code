export default function LoginMain() {
    return (
        <div className="login_main_full">
            <form action="./login_anne" method="post" encType="multipart/form-data">
                <input type="text" name="title" placeholder="텍스트 입력" />
                <input type="text" name="content" />
                <input type="text" name="id" />
                <input type="password" name="password" />
                <input type="submit" />
            </form>
        </div>
    );
}
