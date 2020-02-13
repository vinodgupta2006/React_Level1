import React from 'react';
import DashboardView from './dashboard';
import SeatAllocation from './seatAlocation/seatAlocation';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div style={{overflowX: 'hidden'}}>
                <DashboardView />
                <SeatAllocation />
            </div>
        )
    }
}

export default Dashboard;