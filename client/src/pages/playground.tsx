import React from 'react';
import InputWithHeading from '../components/Inputs/InputRound';
import InputSideBorder from '../components/Inputs/InputSideBorder';
import InputIcon from '../components/Inputs/InputIcon';
import SimpleButton from '../components/Buttons/SimpleButton';
import TattooPicCard from '../components/Cards/TattooPicCard';
import TattooPost from '../components/Cards/TattooPost';
import Keywords from '../pages/Keywords';
import YourAppointment from '../pages/YourAppointment';
import '../styles/App.scss';

const Playground = (): JSX.Element => {
    return (
        <p>
            <Keywords color={'green'} />
            <p></p>
            <YourAppointment />
            <p></p>
            <InputSideBorder color={'green'} placeholder={'Ssssup'} />
            <p></p>
            <SimpleButton color={'green'} text="Add" />
            <SimpleButton color={'lilac'} text="Submit" />
            <SimpleButton color={'pink'} text="Login" />
            <p></p>
            <TattooPicCard
                color={'green'}
                src={'http://www.martaltes.com/wp-content/uploads/2020/09/What-is-Joker-Tattoo.jpg'}
            />
            <TattooPicCard
                color={'pink'}
                src={'http://www.martaltes.com/wp-content/uploads/2020/09/What-is-Joker-Tattoo.jpg'}
            />
            <TattooPicCard
                color={'lilac'}
                src={'http://www.martaltes.com/wp-content/uploads/2020/09/What-is-Joker-Tattoo.jpg'}
            />
            <p></p>
            <TattooPost
                color={'lilac'}
                src={'http://www.martaltes.com/wp-content/uploads/2020/09/What-is-Joker-Tattoo.jpg'}
                comments={10}
            />
            <p></p>
            <InputIcon color={'yellow'} placeholder={<>&#xF002;</>} />
            <p></p>
            <InputSideBorder color={'pink'} placeholder="Tattoo title" />
            <p></p>
            <InputWithHeading color={'lilac'} placeholder="Something random" />
        </p>
    );
};

export default Playground;
