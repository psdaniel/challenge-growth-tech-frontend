import React, { useState } from 'react';
import { getData } from '../api/api';
import { GetDataResponse } from '../api/api.types';
import { Cards } from '../cards/cards';
import { Button } from '../shared/components/button/button';
import { Input } from '../shared/components/input/input';
import { useStyles } from './dashboard.styles';

export const Dashboard = () => {
    const classes = useStyles();
    const [data, setData] = useState<GetDataResponse>();
    const [companyName, setCompanyName] = useState('');

    const handleClick = async () => {
        const response = await getData(1, companyName);
        setData(response.data);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setCompanyName(target.value)
    }

    return (
    <>  
        <section className={classes.container}>
            <div className={classes.postsComponent}>
                {data && <Cards data={data} />}
            </div>
            <div className={classes.inputComponent}>
                <Input onChange={handleChange} type="text" />
                <Button onClick={handleClick} buttonText="Get Posts" />
            </div>
            <div className={classes.userComponent}>
                {data && <span className={classes.textStyles}>Posts by: <br /> Username: {data.user[0].username}<br/> Company Name: {data.user[0].company.name}</span>}
            </div>
        </section>
    </>
    )
}