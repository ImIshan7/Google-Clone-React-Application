import {Component} from "react";
import logo from '../../images/icon.png'
import user from '../../images/user.png'

export class Google extends Component {
    render() {
        return (
            <><div>
                <div className="flex justify-between text-sm text-gray-700">
                    <div className="flex items-center">
                        <a className="block p-3 font-bold">About</a>
                        <a className="block p-3 font-bold">Store</a>
                    </div>
                    <div className="flex items-center">
                        <a className="block p-3 font-bold">Gmail</a>
                        <a className="block p-3 font-bold">Images</a>
                        <img className="rounded-full block py-3 px-4" src={user}/>
                    </div>
                </div>

                <div className="flex justify-center pt-20">
                    <div>

                        <img className="w-2/3 ml-auto mr-auto mb-6" src={logo}/>

                            <div className="flex border border-gray-200 rounded-full p-4 shadow text-xl">
                                <div>🔍</div>
                                <input type="text" className="w-full outline-none px-3"></input>


                            </div>
                            <div className="mt-8 text-center">
                                <button className="mr-3 bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">Google Search</button>
                                <button className="bg-gray-200 border border-gray-300 py-3 px-4 rounded hover:bg-gray-400 hover:border-gray-500">I'm Feeling Lucky</button>
                            </div>
                    </div>
                </div>


                <div className="fixed bottom-0 bg-gray-200 border-t w-full flex justify-between text-gray-600 text-xs">
                    <div className="flex">
                        <a className="block p-3">Advertising</a>
                        <a className="block p-3">Business</a>
                        <a className="block p-3">How Search Works</a>
                    </div>
                    <div className="flex">
                        <a className="block p-3">Privacy</a>
                        <a className="block p-3">Terms</a>
                        <a className="block p-3">Settings</a>
                    </div>
                </div>

            </div>
            </>
        );
    }
}