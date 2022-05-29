import React, {useEffect, useState} from 'react'
import Layout from '../layouts/Backend'
import axios from "axios";
import {__, asset} from "@/utils/common";

const Update = () => {
    const [analytics, setAnalytics] = useState({
        posts: 0,
        pages: 0,
        users: 0,
        storage: 0,
    });

    useEffect(() => {
        axios.get('/admin-cp/analytics')
            .then(res => {
                setAnalytics(res.data)
            });
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-success">
                    <p>{__('You are using Juzaweb CMS Version:')} </p>
                    <p>{__('View CMS')} <a href="https://juzaweb.com/documentation/changelog" target="_blank">{__('change logs here')}</a></p>
                </div>

                <div id="update-form">
                    <img src={asset('jw-styles/juzaweb/themes/default/assets/images/loader.gif')} alt="Update Loading"/>
                </div>
            </div>
        </div>
    )
}

Update.layout = page => <Layout children={page}/>

export default Update
