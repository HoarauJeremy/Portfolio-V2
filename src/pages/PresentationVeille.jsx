export default function PresentationVeille() {
    return <>
        <div className="w-full my-3 font-rubik">
            <h3 className="text-lg font-medium underline">Les technologies et le développement Web: </h3>
            <p className="mx-2 my-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea molestias tenetur voluptate provident autem itaque ab nostrum animi maxime saepe iure repellat,
                nulla accusamus, vel nobis explicabo ut labore.
            </p>
        </div>
        <div className="w-full my-3 font-rubik">
            <h3 className="text-lg font-medium underline">Mes Principaux outils de veille :</h3>
            <div className="m-2">
                <ul className="pl-8 list-disc">
                    <li>Notification Google / Discover Google Chrome</li>
                    <li><a className="underline hover:text-blue-800" href="https://daily.dev">Daily.dev (Extension et applications)</a></li>
                    <li>
                        Youtube :
                        <ul className="list-outside">
                            <li>- <a className="underline hover:text-blue-800" href="https://www.youtube.com/@KevinPowell">Kevin Powell</a></li>
                            <li>- <a className="underline hover:text-blue-800" href="https://www.youtube.com/@Fireship">Fireship</a></li>
                            {/* <li>Youtube</li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className="w-full my-3 font-rubik">
            <h3 className="text-lg font-medium underline">Mes autres outils de veille :</h3>
            <div className="m-2">
                <ul className="pl-8 list-disc">
                    <li><a className="underline hover:text-blue-800" href="https://feedly.com">Feedly</a></li>
                    <li>Feeder</li>
                </ul>
            </div>
        </div>
    </>
}