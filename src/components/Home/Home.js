import React from 'react'
import AppInteractive from '../Interactive/AppInteractive';
import Complementary from './Complementary/Complementary';
import ViewTask from './Control/ViewTask';
import Map from './Feed/Map';
import CreateStatus from './Feed/CreateStatus/CreateStatus';
import StatusFeed from './Feed/StatusFeed';

function Home() {
    return (
        <>
            <div className="home">
                <div className="container__body--home">
                    <div className="item__wrap--home wrap__viewTask">
                        <ViewTask />
                    </div>
                    <div className="item__wrap--home wrap__newFeed">
                        <CreateStatus/>
                        <StatusFeed/>
                        {/* <Map/> */}

                    </div>
                    <div className="item__wrap--home wrap__complementary">
                        <Complementary />
                        <AppInteractive />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home;