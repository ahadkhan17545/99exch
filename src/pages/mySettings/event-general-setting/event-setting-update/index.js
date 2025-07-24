import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Appconfig from '../../../../config/config'
import { useParams} from "react-router-dom";
import { Card,  Checkbox, Form, Input,  Button } from 'antd';
import { NotificationContainer, NotificationManager } from 'react-notifications';


const EventGeneralSetting = () => {
    const [formCricket] = Form.useForm();
    const [formTennis] = Form.useForm();
    const [formSoccer] = Form.useForm();
    const [formFancy] = Form.useForm();
    const [formBookmaker] = Form.useForm();

    const params = useParams();
    const event_type_id = params.event_type_id
    const event_id = params.event_id

    const userInfo = JSON.parse(localStorage.getItem('userdata'))
    const userId = userInfo?._id;
    const [isDisabled, setIsDisabled] = useState(false)


    const lock_bet_cricket = Form.useWatch('lock_bet_cricket', formCricket);
    const unmatch_bet_cricket = Form.useWatch('unmatch_bet_cricket', formCricket);
    const match_odds_cricket = Form.useWatch('match_odds_cricket', formCricket);
    const update_all_users_cricket = Form.useWatch('update_all_users_cricket', formCricket);

    const lock_bet_tennis = Form.useWatch('lock_bet_tennis', formTennis);
    const unmatch_bet_tennis = Form.useWatch('unmatch_bet_tennis', formTennis);
    const match_odds_tennis = Form.useWatch('match_odds_tennis', formTennis);
    const update_all_users_tennis = Form.useWatch('update_all_users_tennis', formTennis);

    const lock_bet_soccer = Form.useWatch('lock_bet_soccer', formSoccer);
    const unmatch_bet_soccer = Form.useWatch('unmatch_bet_soccer', formSoccer);
    const match_odds_soccer = Form.useWatch('match_odds_soccer', formSoccer);
    const update_all_users_soccer = Form.useWatch('update_all_users_soccer', formSoccer);


    const lock_bet_fancy = Form.useWatch('lock_bet_fancy', formFancy);
    const match_odds_fancy = Form.useWatch('match_odds_fancy', formFancy);

    const lock_bet_bookmaker = Form.useWatch('lock_bet_bookmaker', formBookmaker);
    const unmatch_bet_bookmaker = Form.useWatch('unmatch_bet_bookmaker', formBookmaker);
    const match_odds_bookmaker = Form.useWatch('match_odds_bookmaker', formBookmaker);
    const update_all_users_bookmaker = Form.useWatch('update_all_users_bookmaker', formBookmaker);

    const [cricket, setCricketData] = useState({
        min_stack_cricket: '',
        max_stack_cricket: '',
        max_profit_cricket: '',
        max_loss_cricket: '',
        bet_delay_cricket: '',
        pre_inplay_profit_cricket: '',
        pre_inplay_stack_cricket: '',
        min_odds_cricket: '',
        max_odds_cricket: '',
        unmatch_bet_cricket: false,
        lock_bet_cricket: false,
        update_all_users_cricket: false,
        match_odds_cricket: false
    });



    const [bookmaker, setBookmakerData] = useState({
        min_stack_bookmaker: '',
        max_stack_bookmaker: '',
        max_profit_bookmaker: '',
        max_loss_bookmaker: '',
        bet_delay_bookmaker: '',
        pre_inplay_profit_bookmaker: '',
        pre_inplay_stack_bookmaker: '',
        min_odds_bookmaker: '',
        max_odds_bookmaker: '',
        unmatch_bet_bookmaker: false,
        lock_bet_bookmaker: false,
        update_all_users_bookmaker: false,
        match_odds_bookmaker: false
    });

    const [tennis, setTennisData] = useState({
        min_stack_tennis: '',
        max_stack_tennis: '',
        max_profit_tennis: '',
        max_loss_tennis: '',
        bet_delay_tennis: '',
        pre_inplay_profit_tennis: '',
        pre_inplay_stack_tennis: '',
        min_odds_tennis: '',
        max_odds_tennis: '',
        unmatch_bet_tennis: false,
        lock_bet_tennis: false,
        update_all_users_tennis: false,
        match_odds_tennis: false
    });

    const [soccer, setSoccerData] = useState({
        min_stack_soccer: '',
        max_stack_soccer: '',
        max_profit_soccer: '',
        max_loss_soccer: '',
        bet_delay_soccer: '',
        pre_inplay_profit_soccer: '',
        pre_inplay_stack_soccer: '',
        min_odds_soccer: '',
        max_odds_soccer: '',
        unmatch_bet_soccer: false,
        lock_bet_soccer: false,
        update_all_users_soccer: false,
        match_odds_soccer: false
    });

    const [fancy, setFancyData] = useState({
        min_stack_fancy: '',
        max_stack_fancy: '',
        bet_delay_fancy: '',
        max_profit_fancy: '',
        unmatch_bet_fancy: false,
        lock_bet_fancy: false,
        update_all_users_fancy: false,
        match_odds_fancy: false

    });

    const [casino, setCasinoData] = useState({
        min_stack_casino: '',
        max_stack_casino: '',
        max_profit_casino: '',
        max_loss_casino: '',
        bet_delay_casino: '',
        pre_inplay_profit_casino: '',
        pre_inplay_stack_casino: '',
        min_odds_casino: '',
        max_odds_casino: '',
        unmatch_bet_casino: false,
        lock_bet_casino: false,
        update_all_users_casino: false,
        match_odds_casino: false

    });


    const [Scricket, setSCricketData] = useState({
        min_stack_cricket: 0,
        max_stack_cricket: 0,
        max_profit_cricket: 0,
        max_loss_cricket: 0,
        bet_delay_cricket: 0,
        pre_inplay_profit_cricket: 0,
        pre_inplay_stack_cricket: 0,
        min_odds_cricket: 0,
        max_odds_cricket: 0,
        unmatch_bet_cricket: false,
        lock_bet_cricket: false,
        update_all_users_cricket: false
    });


    const [Stennis, setSTennisData] = useState({
        min_stack_tennis: '',
        max_stack_tennis: '',
        max_profit_tennis: '',
        max_loss_tennis: '',
        bet_delay_tennis: '',
        pre_inplay_profit_tennis: '',
        pre_inplay_stack_tennis: '',
        min_odds_tennis: '',
        max_odds_tennis: '',
        unmatch_bet_tennis: false,
        lock_bet_tennis: false,
        update_all_users_tennis: false
    });

    const [Ssoccer, setSSoccerData] = useState({
        min_stack_soccer: '',
        max_stack_soccer: '',
        max_profit_soccer: '',
        max_loss_soccer: '',
        bet_delay_soccer: '',
        pre_inplay_profit_soccer: '',
        pre_inplay_stack_soccer: '',
        min_odds_soccer: '',
        max_odds_soccer: '',
        unmatch_bet_soccer: false,
        lock_bet_soccer: false,
        update_all_users_soccer: false
    });

    const [Sfancy, setSFancyData] = useState({
        min_stack_fancy: '',
        max_stack_fancy: '',
        bet_delay_fancy: '',
        max_profit_fancy: '',
        unmatch_bet_fancy: false,
        lock_bet_fancy: false,
        update_all_users_fancy: false
    });

    const [Scasino, setSCasinoData] = useState({
        min_stack_casino: '',
        max_stack_casino: '',
        max_profit_casino: '',
        max_loss_casino: '',
        bet_delay_casino: '',
        pre_inplay_profit_casino: '',
        pre_inplay_stack_casino: '',
        min_odds_casino: '',
        max_odds_casino: '',
        unmatch_bet_casino: false,
        lock_bet_casino: false,
        update_all_users_casino: false
    });

    const [Sbookmaker, setSbookmakerData] = useState({
        min_stack_bookmaker: '',
        max_stack_bookmaker: '',
        max_profit_bookmaker: '',
        max_loss_bookmaker: '',
        bet_delay_bookmaker: '',
        pre_inplay_profit_bookmaker: '',
        pre_inplay_stack_bookmaker: '',
        min_odds_bookmaker: '',
        max_odds_bookmaker: '',
        unmatch_bet_bookmaker: false,
        lock_bet_bookmaker: false,
        update_all_users_bookmaker: false
    });



    const handleCricketSubmit = async (values) => {

        Object.assign(cricket, values)
        let id = userInfo._id;
        if (userId != 0) {
            id = userId;
        }
        const postobje = {
            "user_id": id,
            "event_type": event_type_id,
            "event_id": event_id,
            "event_name": "cricket",
            "min_stake": cricket.min_stack_cricket,
            "max_stake": cricket.max_stack_cricket,
            "max_profit": cricket.max_profit_cricket,
            "max_loss": cricket.max_loss_cricket,
            "bet_delay": cricket.bet_delay_cricket,
            "pre_inplay_profit": cricket.pre_inplay_profit_cricket,
            "pre_inplay_stake": cricket.pre_inplay_stack_cricket,
            "min_odds": cricket.min_odds_cricket,
            "max_odds": cricket.max_odds_cricket,
            "unmatch_bet": cricket.unmatch_bet_cricket ? 'Yes' : 'No',
            "lock_bet": cricket.lock_bet_cricket ? 'Yes' : 'No',
            "is_unmatch_allowed": cricket.unmatch_bet_cricket ? 'Yes' : 'No',
            "is_odds_allowed": cricket.lock_bet_cricket ? 'Yes' : 'No',
            "update_all_users": cricket.update_all_users_cricket ? 'Yes' : 'No',
            // "update_all_users_cricket": cricket.update_all_users_cricket ? 'Yes' : 'No',
            "is_odds_active": cricket.match_odds_cricket ? 'Yes' : 'No',
            "is_fancy_active": "Yes",
            "is_bookmaker_active": "Yes",

        }
        save(postobje);
    }

    const handleTennisSubmit = (values) => {
        console.log('values:', values)
        Object.assign(tennis, values)

        let id = userInfo._id;
        if (userId != 0) {
            id = userId;
        }
        const postobje = {
            "user_id": id,
            "event_type": event_type_id,
            "event_id": event_id,
            "event_name": "tennis",
            "min_stake": tennis.min_stack_tennis,
            "max_stake": tennis.max_stack_tennis,
            "max_profit": tennis.max_profit_tennis,
            "max_loss": tennis.max_loss_tennis,
            "bet_delay": tennis.bet_delay_tennis,
            "pre_inplay_profit": tennis.pre_inplay_profit_tennis,
            "pre_inplay_stake": tennis.pre_inplay_stack_tennis,
            "min_odds": tennis.min_odds_tennis,
            "max_odds": tennis.max_odds_tennis,
            "unmatch_bet": tennis.unmatch_bet_tennis ? 'Yes' : 'No',
            "lock_bet": tennis.lock_bet_tennis ? 'Yes' : 'No',
            "is_unmatch_allowed": tennis.unmatch_bet_tennis ? 'Yes' : 'No',
            "is_odds_allowed": tennis.lock_bet_tennis ? 'Yes' : 'No',
            "update_all_users": tennis.update_all_users_tennis ? 'Yes' : 'No',
            "is_odds_active": tennis.match_odds_tennis ? 'Yes' : 'No',
            "is_fancy_active": "Yes",
            "is_bookmaker_active": "Yes",
        }
        save(postobje);
    }


    const handleSoccerSubmit = (values) => {
        Object.assign(soccer, values)

        let id = userInfo._id;
        if (userId != 0) {
            id = userId;
        }
        const postobje = {
            "user_id": id,
            "event_type": event_type_id,
            "event_id": event_id,
            "event_name": "soccer",
            "min_stake": soccer.min_stack_soccer,
            "max_stake": soccer.max_stack_soccer,
            "max_profit": soccer.max_profit_soccer,
            "max_loss": soccer.max_loss_soccer,
            "bet_delay": soccer.bet_delay_soccer,
            "pre_inplay_profit": soccer.pre_inplay_profit_soccer,
            "pre_inplay_stake": soccer.pre_inplay_stack_soccer,
            "min_odds": soccer.min_odds_soccer,
            "max_odds": soccer.max_odds_soccer,
            "unmatch_bet": soccer.unmatch_bet_soccer ? 'Yes' : 'No',
            "lock_bet": soccer.lock_bet_soccer ? 'Yes' : 'No',
            "is_unmatch_allowed": soccer.unmatch_bet_soccer ? 'Yes' : 'No',
            "is_odds_allowed": soccer.lock_bet_soccer ? 'Yes' : 'No',
            "update_all_users": soccer.update_all_users_soccer ? 'Yes' : 'No',
            "is_odds_active": soccer.match_odds_soccer ? 'Yes' : 'No',
            "is_fancy_active": "Yes",
            "is_bookmaker_active": "Yes",
        }
        save(postobje);
    }



    const handleBookmakerSubmit = (values) => {
        Object.assign(bookmaker, values)

        let id = userInfo._id;
        if (userId != 0) {
            id = userId;
        }
        const postobje = {
            "user_id": id,
            "event_type": 2000,
            "event_id": event_id,
            "event_name": "bookmaker",
            "min_stake": bookmaker.min_stack_bookmaker,
            "max_stake": bookmaker.max_stack_bookmaker,
            "max_profit": bookmaker.max_profit_bookmaker,
            "max_loss": bookmaker.max_loss_bookmaker,
            "bet_delay": bookmaker.bet_delay_bookmaker,
            "pre_inplay_profit": bookmaker.pre_inplay_profit_bookmaker,
            "pre_inplay_stake": bookmaker.pre_inplay_stack_bookmaker,
            "min_odds": bookmaker.min_odds_bookmaker,
            "max_odds": bookmaker.max_odds_bookmaker,
            "unmatch_bet": bookmaker.unmatch_bet_bookmaker ? 'Yes' : 'No',
            "lock_bet": bookmaker.lock_bet_bookmaker ? 'Yes' : 'No',
            "is_unmatch_allowed": bookmaker.unmatch_bet_bookmaker ? 'Yes' : 'No',
            "is_odds_allowed": bookmaker.lock_bet_bookmaker ? 'Yes' : 'No',
            "update_all_users": bookmaker.update_all_users_bookmaker ? 'Yes' : 'No',
            "is_odds_active": "Yes",
            "is_fancy_active": "Yes",
            "is_bookmaker_active": bookmaker.match_odds_bookmaker ? 'Yes' : 'No',

        }
        save(postobje);
    }

    const handleFancySubmit = (values) => {
        Object.assign(fancy, values)

        let id = userInfo._id;
        if (userId != 0) {
            id = userId;
        }
        const postobje = {
            "user_id": id,
            "event_type": 999,
            "event_id": event_id,
            "event_name": "fancy",
            "min_stake": fancy.min_stack_fancy,
            "max_stake": fancy.max_stack_fancy,
            "max_profit": fancy.max_profit_fancy,
            "max_loss": fancy.max_loss_fancy,
            "bet_delay": fancy.bet_delay_fancy,
            "pre_inplay_profit": fancy.pre_inplay_profit_fancy,
            "pre_inplay_stake": fancy.pre_inplay_stack_fancy,
            "min_odds": fancy.min_odds_fancy,
            "max_odds": fancy.max_odds_fancy,
            "unmatch_bet": fancy.unmatch_bet_fancy ? 'Yes' : 'No',
            "lock_bet": fancy.lock_bet_fancy ? 'Yes' : 'No',
            "is_unmatch_allowed": fancy.unmatch_bet_fancy ? 'Yes' : 'No',
            "is_odds_allowed": fancy.lock_bet_fancy ? 'Yes' : 'No',
            "update_all_users": fancy.update_all_users_fancy ? 'Yes' : 'No',
            "is_odds_active": "Yes",
            "is_fancy_active": fancy.match_odds_fancy ? 'Yes' : 'No',
            "is_bookmaker_active": "Yes",
        }
        save(postobje);
    }


    const onFinishCricketFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFinishTennisFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishSoccerFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishFancyFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onFinishBookmakerFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function save(formData) {


        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}matchGeneralSetting/addSetting`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: JSON.stringify(formData)
        };

        axios(config)
            .then(function (response) {
                // storeUserinfo(response.data.resultData);
                if (response.data.result) {
                    NotificationManager.success('Event General Setting Update', '', 3000);

                    // getUserGenSettings();
                    // storeUserinfo(response.data.resultData);

                } else {
                    NotificationManager.error("Something Went Wrong", '', 3000);

                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        if (userInfo.masters.length > 0) {
            let id = "";
            userInfo.masters.map((user) => {
                if (user.user_type == "Super Admin") {
                    id = user.id;
                }
            })
            getSuperGenSettings(id)
        }
        else {
            if (userId != 0) {
                getSuperGenSettings(userId)
            }
        }

        getUserGenSettings()
    }, [userId])

    const getSuperGenSettings = (id) => {

        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}matchGeneralSetting/getSetting`,

            headers: {
                'Content-Type': 'application/json',

            },
            data: JSON.stringify({ "user_id": id, "event_id": event_id })
        };

        axios(config)
            .then(function (response) {
                let setting = response.data.resultData;

                setting.map((row, index) => {
                    if (row.event_name === 'cricket') {
                        setSCricketData({
                            min_stack_cricket: row.min_stake,
                            max_stack_cricket: row.max_stake,
                            max_profit_cricket: row.max_profit,
                            max_loss_cricket: row.max_loss,
                            bet_delay_cricket: row.bet_delay,
                            pre_inplay_profit_cricket: row.pre_inplay_profit,
                            pre_inplay_stack_cricket: row.pre_inplay_stake,
                            min_odds_cricket: row.min_odds,
                            max_odds_cricket: row.max_odds,
                            unmatch_bet_cricket: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_cricket: row.lock_bet == "Yes" ? true : false
                        });
                    }
                    if (row.event_name === 'soccer') {
                        setSSoccerData({
                            min_stack_soccer: row.min_stake,
                            max_stack_soccer: row.max_stake,
                            max_profit_soccer: row.max_profit,
                            max_loss_soccer: row.max_loss,
                            bet_delay_soccer: row.bet_delay,
                            pre_inplay_profit_soccer: row.pre_inplay_profit,
                            pre_inplay_stack_soccer: row.pre_inplay_stake,
                            min_odds_soccer: row.min_odds,
                            max_odds_soccer: row.max_odds,
                            unmatch_bet_soccer: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_soccer: row.lock_bet == "Yes" ? true : false
                        });
                    }
                    if (row.event_name === 'tennis') {
                        setSTennisData({
                            min_stack_tennis: row.min_stake,
                            max_stack_tennis: row.max_stake,
                            max_profit_tennis: row.max_profit,
                            max_loss_tennis: row.max_loss,
                            bet_delay_tennis: row.bet_delay,
                            pre_inplay_profit_tennis: row.pre_inplay_profit,
                            pre_inplay_stack_tennis: row.pre_inplay_stake,
                            min_odds_tennis: row.min_odds,
                            max_odds_tennis: row.max_odds,
                            unmatch_bet_tennis: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_tennis: row.lock_bet == "Yes" ? true : false
                        });
                    }
                    if (row.event_name === 'casino') {
                        setSCasinoData({
                            min_stack_casino: row.min_stake,
                            max_stack_casino: row.max_stake,
                            max_profit_casino: row.max_profit,
                            max_loss_casino: row.max_loss,
                            bet_delay_casino: row.bet_delay,
                            pre_inplay_profit_casino: row.pre_inplay_profit,
                            pre_inplay_stack_casino: row.pre_inplay_stake,
                            min_odds_casino: row.min_odds,
                            max_odds_casino: row.max_odds,
                            unmatch_bet_casino: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_casino: row.lock_bet == "Yes" ? true : false
                        });
                    }


                    if (row.event_name === 'fancy') {
                        setSFancyData({
                            min_stack_fancy: row.min_stake,
                            max_stack_fancy: row.max_stake,
                            max_profit_fancy: row.max_profit,
                            bet_delay_fancy: row.bet_delay,
                            lock_bet_fancy: row.lock_bet == "Yes" ? true : false
                        });
                    }
                })

                // storeUserinfo(response.data.resultData);

            })
            .catch(function (error) {
                console.log(error);
            });
    }



    const getUserGenSettings = () => {
        let id = userInfo?._id;
        if (userId != 0) {
            id = userId;
        }
        var config = {
            method: 'post',
            url: `${Appconfig.apiUrl}matchGeneralSetting/getSetting`,

            headers: {
                'Content-Type': 'application/json',

            },
            data: JSON.stringify({ "user_id": id, "event_id": event_id })
        };

        axios(config)
            .then(function (response) {
                let setting = response.data.resultData;

                setting.map((row, index) => {
                    if (row.event_name === 'cricket') {
                        setCricketData({
                            min_stack_cricket: row.min_stake,
                            max_stack_cricket: row.max_stake,
                            max_profit_cricket: row.max_profit,
                            max_loss_cricket: row.max_loss,
                            bet_delay_cricket: row.bet_delay,
                            pre_inplay_profit_cricket: row.pre_inplay_profit,
                            pre_inplay_stack_cricket: row.pre_inplay_stake,
                            min_odds_cricket: row.min_odds,
                            max_odds_cricket: row.max_odds,
                            unmatch_bet_cricket: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_cricket: row.lock_bet == "Yes" ? true : false,
                            match_odds_cricket: row.is_odds_active == "Yes" ? true : false

                        });
                    }
                    if (row.event_name === 'soccer') {
                        setSoccerData({
                            min_stack_soccer: row.min_stake,
                            max_stack_soccer: row.max_stake,
                            max_profit_soccer: row.max_profit,
                            max_loss_soccer: row.max_loss,
                            bet_delay_soccer: row.bet_delay,
                            pre_inplay_profit_soccer: row.pre_inplay_profit,
                            pre_inplay_stack_soccer: row.pre_inplay_stake,
                            min_odds_soccer: row.min_odds,
                            max_odds_soccer: row.max_odds,
                            unmatch_bet_soccer: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_soccer: row.lock_bet == "Yes" ? true : false,
                            match_odds_soccer: row.is_odds_active == "Yes" ? true : false
                        });
                    }
                    if (row.event_name === 'tennis') {
                        setTennisData({
                            min_stack_tennis: row.min_stake,
                            max_stack_tennis: row.max_stake,
                            max_profit_tennis: row.max_profit,
                            max_loss_tennis: row.max_loss,
                            bet_delay_tennis: row.bet_delay,
                            pre_inplay_profit_tennis: row.pre_inplay_profit,
                            pre_inplay_stack_tennis: row.pre_inplay_stake,
                            min_odds_tennis: row.min_odds,
                            max_odds_tennis: row.max_odds,
                            unmatch_bet_tennis: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_tennis: row.lock_bet == "Yes" ? true : false,
                            match_odds_tennis: row.is_odds_active == "Yes" ? true : false
                        });
                    }
                    if (row.event_name === 'casino') {
                        setCasinoData({
                            min_stack_casino: row.min_stake,
                            max_stack_casino: row.max_stake,
                            max_profit_casino: row.max_profit,
                            max_loss_casino: row.max_loss,
                            bet_delay_casino: row.bet_delay,
                            pre_inplay_profit_casino: row.pre_inplay_profit,
                            pre_inplay_stack_casino: row.pre_inplay_stake,
                            min_odds_casino: row.min_odds,
                            max_odds_casino: row.max_odds,
                            unmatch_bet_casino: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_casino: row.lock_bet == "Yes" ? true : false,
                            match_odds_casino: row.is_odds_active == "Yes" ? true : false
                        });
                    }

                    if (row.event_name === 'fancy') {
                        setFancyData({
                            min_stack_fancy: row.min_stake,
                            max_stack_fancy: row.max_stake,
                            max_profit_fancy: row.max_profit,
                            bet_delay_fancy: row.bet_delay,
                            lock_bet_fancy: row.lock_bet == "Yes" ? true : false,
                            match_odds_fancy: row.is_fancy_active == "Yes" ? true : false
                        });
                    }

                    if (row.event_name === 'bookmaker') {
                        setBookmakerData({
                            min_stack_bookmaker: row.min_stake,
                            max_stack_bookmaker: row.max_stake,
                            max_profit_bookmaker: row.max_profit,
                            max_loss_bookmaker: row.max_loss,
                            bet_delay_bookmaker: row.bet_delay,
                            pre_inplay_profit_bookmaker: row.pre_inplay_profit,
                            pre_inplay_stack_bookmaker: row.pre_inplay_stake,
                            min_odds_bookmaker: row.min_odds,
                            max_odds_bookmaker: row.max_odds,
                            unmatch_bet_bookmaker: row.is_unmatch_allowed == "Yes" ? true : false,
                            lock_bet_bookmaker: row.lock_bet == "Yes" ? true : false,
                            match_odds_bookmaker: row.is_bookmaker_active == "Yes" ? true : false
                        });
                    }

                })

                // storeUserinfo(response.data.resultData);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {

        if (cricket) {
            formCricket.setFieldsValue({
                min_stack_cricket: cricket?.min_stack_cricket,
                max_stack_cricket: cricket?.max_stack_cricket,
                max_profit_cricket: cricket?.max_profit_cricket,
                max_loss_cricket: cricket?.max_loss_cricket,
                bet_delay_cricket: cricket?.bet_delay_cricket,
                pre_inplay_profit_cricket: cricket?.pre_inplay_profit_cricket,
                pre_inplay_stack_cricket: cricket?.pre_inplay_stack_cricket,
                min_odds_cricket: cricket?.min_odds_cricket,
                max_odds_cricket: cricket?.max_odds_cricket,
                unmatch_bet_cricket: cricket?.unmatch_bet_cricket == true ? true : false,
                lock_bet_cricket: cricket?.lock_bet_cricket == true ? true : false,
                match_odds_cricket: cricket?.match_odds_cricket == true ? true : false
            });
        }

        if (tennis) {
            console.table(tennis)
            formTennis.setFieldsValue({
                min_stack_tennis: tennis?.min_stack_tennis,
                max_stack_tennis: tennis?.max_stack_tennis,
                max_profit_tennis: tennis?.max_profit_tennis,
                max_loss_tennis: tennis?.max_loss_tennis,
                bet_delay_tennis: tennis?.bet_delay_tennis,
                pre_inplay_profit_tennis: tennis?.pre_inplay_profit_tennis,
                pre_inplay_stack_tennis: tennis?.pre_inplay_stack_tennis,
                min_odds_tennis: tennis?.min_odds_tennis,
                max_odds_tennis: tennis?.max_odds_tennis,
                unmatch_bet_tennis: tennis?.unmatch_bet_tennis == true ? true : false,
                lock_bet_tennis: tennis?.lock_bet_tennis == true ? true : false,
                match_odds_tennis: tennis?.match_odds_tennis == true ? true : false
            });
        }

        if (soccer) {
            formSoccer.setFieldsValue({
                min_stack_soccer: soccer?.min_stack_soccer,
                max_stack_soccer: soccer?.max_stack_soccer,
                max_profit_soccer: soccer?.max_profit_soccer,
                max_loss_soccer: soccer?.max_loss_soccer,
                bet_delay_soccer: soccer?.bet_delay_soccer,
                pre_inplay_profit_soccer: soccer?.pre_inplay_profit_soccer,
                pre_inplay_stack_soccer: soccer?.pre_inplay_stack_soccer,
                min_odds_soccer: soccer?.min_odds_soccer,
                max_odds_soccer: soccer?.max_odds_soccer,
                unmatch_bet_soccer: soccer?.unmatch_bet_soccer == true ? true : false,
                lock_bet_soccer: soccer?.lock_bet_soccer == true ? true : false,
                match_odds_soccer: soccer?.match_odds_soccer == true ? true : false
            });
        }

        if (fancy) {
            formFancy.setFieldsValue({
                min_stack_fancy: fancy?.min_stack_fancy,
                max_stack_fancy: fancy?.max_stack_fancy,
                max_profit_fancy: fancy?.max_profit_fancy,
                // max_loss_fancy: fancy?.max_loss_fancy,
                bet_delay_fancy: fancy?.bet_delay_fancy,
                // pre_inplay_profit_fancy: fancy?.pre_inplay_profit_fancy,
                // pre_inplay_stack_fancy: fancy?.pre_inplay_stack_fancy,
                // min_odds_fancy: fancy?.min_odds_fancy,
                // max_odds_fancy: fancy?.max_odds_fancy,
                // unmatch_bet_fancy: fancy?.unmatch_bet_fancy == "Yes" ? true : false,
                lock_bet_fancy: fancy?.lock_bet_fancy == true ? true : false,
                match_odds_fancy: fancy?.match_odds_fancy == true ? true : false
            });
        }

        if (bookmaker) {
            formBookmaker.setFieldsValue({
                min_stack_bookmaker: bookmaker?.min_stack_bookmaker,
                max_stack_bookmaker: bookmaker?.max_stack_bookmaker,
                max_profit_bookmaker: bookmaker?.max_profit_bookmaker,
                max_loss_bookmaker: bookmaker?.max_loss_bookmaker,
                bet_delay_bookmaker: bookmaker?.bet_delay_bookmaker,
                pre_inplay_profit_bookmaker: bookmaker?.pre_inplay_profit_bookmaker,
                pre_inplay_stack_bookmaker: bookmaker?.pre_inplay_stack_bookmaker,
                min_odds_bookmaker: bookmaker?.min_odds_bookmaker,
                max_odds_bookmaker: bookmaker?.max_odds_bookmaker,
                unmatch_bet_bookmaker: bookmaker?.unmatch_bet_bookmaker == true ? true : false,
                lock_bet_bookmaker: bookmaker?.lock_bet_bookmaker == true ? true : false,
                match_odds_bookmaker: bookmaker?.match_odds_bookmaker == true ? true : false
            });
        }

    }, [cricket, tennis, soccer, fancy, bookmaker])
    return (
        <>
            <NotificationContainer />
            <div className='grid grid-cols-12 relative mt-[20px] lg:mt-[15px]  px-[15px] lg:px-[30px]' >
                <div className='col-span-12 '>
                    <div className='bg-[#fff] border rounded-[.375rem]'>
                        <div className='col-span-12 px-[6px] py-[5px] font-bold text-[0.875rem] rounded-[1px] h-[35px] bg-[linear-gradient(-180deg,_#2E4B5E_0%,_#243A48_82%)] text-[#ffffff] flex flex-shrink-0 items-center justify-between'>
                            <h5 className='text-[0.938rem] font-bold mb-0 leading-normal'>Event General Setting Update</h5>
                        </div>
                        {
                            event_type_id == 4 &&
                            <>
                                <div className='col-span-12 p-[.75rem]'>
                                    <Card title="Cricket" >
                                        <Form
                                            //
                                            form={formCricket}
                                            className='add-user-general-setting'
                                            name="basic"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish={handleCricketSubmit}
                                            onFinishFailed={onFinishCricketFailed}
                                            autoComplete="off"      >
                                            <div className='grid grid-cols-12 gap-1'>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MIN STAKE"
                                                        name="min_stack_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MIN STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.min_stack_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX STAKE"
                                                        name="max_stack_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.max_stack_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX PROFIT"
                                                        name="max_profit_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX PROFIT is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.max_profit_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX LOSS"
                                                        name="max_loss_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Max Loss is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.max_loss_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="BET DELAY"
                                                        name="bet_delay_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'BET DELAY is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.bet_delay_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="PRE INPLAY PROFIT"
                                                        name="pre_inplay_profit_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'PRE INPLAY PROFIT is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.pre_inplay_profit_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="PRE INPLAY STAKE"
                                                        name="pre_inplay_stack_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'PRE INPLAY STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.pre_inplay_stack_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MIN ODDS"
                                                        name="min_odds_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MIN ODDS is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.min_odds_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX ODDS"
                                                        name="max_odds_cricket"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX ODDS is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Scricket.max_odds_cricket}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="unmatch_bet_cricket"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"

                                                            onChange={(e) => {

                                                                formCricket.setFieldsValue({ 'unmatch_bet_cricket': e.target.checked })

                                                            }}

                                                            checked={unmatch_bet_cricket}

                                                        >UNMATCH BET</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="lock_bet_cricket"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            onChange={(e) => {
                                                                formCricket.setFieldsValue({ 'lock_bet_cricket': e.target.checked })
                                                            }}

                                                            checked={lock_bet_cricket}
                                                            color="primary"
                                                        >LOCK BET</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                        valuePropName="checked"
                                                        name="match_odds_cricket"
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formCricket.setFieldsValue({ 'match_odds_cricket': e.target.checked })
                                                            }}
                                                            checked={match_odds_cricket}
                                                        >MATCH ODDS</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="update_all_users_cricket"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formCricket.setFieldsValue({ 'update_all_users_cricket': e.target.checked })
                                                            }}
                                                        >Click to update for all users</Checkbox>
                                                    </Form.Item>

                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Button type="primary"
                                                            htmlType="submit"
                                                            disabled={isDisabled}
                                                            className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', width: '140px' }}>
                                                            Update
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </Form>
                                    </Card>
                                </div>
                                <div className='col-span-12 p-[.75rem]'>
                                    <Card title="Fancy"  >
                                        <Form
                                            form={formFancy}
                                            className='add-user-general-setting'
                                            name="basic"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish={handleFancySubmit}
                                            onFinishFailed={onFinishFancyFailed}
                                            autoComplete="off"
                                        >
                                            <div className='grid grid-cols-12'>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MIN STAKE"
                                                        name="min_stack_fancy"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MIN STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={fancy.min_stack_fancy}

                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX STAKE"
                                                        name="max_stack_fancy"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={fancy.max_stack_fancy}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX PROFIT"
                                                        name="max_profit_fancy"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX PROFIT is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={fancy.max_profit_fancy}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="BET DELAY"
                                                        name="bet_delay_fancy"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'BET DELAY is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sfancy.bet_delay_fancy}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="lock_bet_fancy"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            onChange={(e) => {
                                                                formFancy.setFieldsValue({ 'lock_bet_fancy': e.target.checked })
                                                            }}

                                                            checked={lock_bet_fancy}
                                                            color="primary"
                                                        >LOCK BET</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                        valuePropName="checked"
                                                        name="match_odds_fancy"
                                                    >
                                                        <Checkbox
                                                            onChange={(e) => {
                                                                formFancy.setFieldsValue({ 'match_odds_fancy': e.target.checked })
                                                            }}
                                                            checked={match_odds_fancy}
                                                            color="primary"
                                                        >MATCH ODDS</Checkbox>
                                                    </Form.Item>

                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="update_all_users_fancy"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formFancy.setFieldsValue({ 'update_all_users_fancy': e.target.checked })
                                                            }}
                                                        >Click to update for all users</Checkbox>
                                                    </Form.Item>

                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                        className='flex items-center justify-center'
                                                    >
                                                        <Button type="primary"
                                                            htmlType="submit"
                                                            disabled={isDisabled}
                                                            className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', width: '140px' }}>
                                                            Update
                                                        </Button>
                                                    </Form.Item>

                                                </div>
                                            </div>
                                        </Form>
                                    </Card>
                                </div>
                                <div className='col-span-12 p-[.75rem]'>
                                    <Card title="Bookmaker"  >
                                        <Form

                                            form={formBookmaker}
                                            className='add-user-general-setting'
                                            name="basic"
                                            labelCol={{
                                                span: 8,
                                            }}
                                            wrapperCol={{
                                                span: 12,
                                            }}
                                            onFinish={handleBookmakerSubmit}
                                            onFinishFailed={onFinishBookmakerFailed}
                                            autoComplete="off"
                                        >
                                            <div className='grid grid-cols-12'>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MIN STAKE"
                                                        name="min_stack_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MIN STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={bookmaker.min_stack_bookmaker}

                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX STAKE"
                                                        name="max_stack_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={bookmaker.max_stack_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX PROFIT"
                                                        name="max_profit_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX PROFIT is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={bookmaker.max_profit_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="Max Loss"
                                                        name="max_loss_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Max Loss is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.max_loss_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="BET DELAY"
                                                        name="bet_delay_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'BET DELAY is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.bet_delay_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="PRE INPLAY PROFIT"
                                                        name="pre_inplay_profit_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'PRE INPLAY PROFIT is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.pre_inplay_profit_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="PRE INPLAY STAKE"
                                                        name="pre_inplay_stack_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'PRE INPLAY STAKE is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.pre_inplay_stack_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MIN ODDS"
                                                        name="min_odds_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MIN ODDS is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.min_odds_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12'>
                                                    <Form.Item
                                                        label="MAX ODDS"
                                                        name="max_odds_bookmaker"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'MAX ODDS is required.',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            className='lg:ml-[10px]'
                                                            max={Sbookmaker.max_odds_bookmaker}
                                                        />
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="unmatch_bet_bookmaker"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formBookmaker.setFieldsValue({ 'unmatch_bet_bookmaker': e.target.checked })
                                                            }}

                                                            checked={unmatch_bet_bookmaker}
                                                        >UNMATCH BET</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="lock_bet_bookmaker"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formBookmaker.setFieldsValue({ 'lock_bet_bookmaker': e.target.checked })
                                                            }}

                                                            checked={lock_bet_bookmaker}
                                                        >LOCK BET</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="match_odds_bookmaker"
                                                        valuePropName="checked"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formBookmaker.setFieldsValue({ 'match_odds_bookmaker': e.target.checked })
                                                            }}

                                                            checked={match_odds_bookmaker}
                                                        >MATCH ODDS</Checkbox>
                                                    </Form.Item>
                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        name="update_all_users_bookmaker"
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                    >
                                                        <Checkbox
                                                            color="primary"
                                                            onChange={(e) => {
                                                                formBookmaker.setFieldsValue({ 'update_all_users_bookmaker': e.target.checked })
                                                            }}
                                                        >Click to update for all users</Checkbox>
                                                    </Form.Item>

                                                </div>
                                                <div className='col-span-12 flex items-center justify-center'>
                                                    <Form.Item
                                                        wrapperCol={{
                                                            span: 24,
                                                        }}
                                                        className='flex items-center justify-center'
                                                    >
                                                        <Button type="primary"
                                                            htmlType="submit"
                                                            disabled={isDisabled}
                                                            className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', width: '140px' }}>
                                                            Update
                                                        </Button>
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </Form>
                                    </Card>
                                </div>
                            </>
                        }
                        {
                            event_type_id == 2 &&
                            <div className='col-span-12 p-[.75rem]'>
                                <Card title="Tennis"  >
                                    <Form
                                        form={formTennis}
                                        className='add-user-general-setting'
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 12,
                                        }}
                                        onFinish={handleTennisSubmit}
                                        onFinishFailed={onFinishTennisFailed}
                                        autoComplete="off"
                                    >
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MIN STAKE"
                                                    name="min_stack_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MIN STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={tennis.min_stack_tennis}

                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MAX STAKE"
                                                    name="max_stack_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={tennis.max_stack_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MAX PROFIT"
                                                    name="max_profit_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX PROFIT is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={tennis.max_profit_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="Max Loss"
                                                    name="max_loss_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Max Loss is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.max_loss_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="BET DELAY"
                                                    name="bet_delay_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'BET DELAY is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.bet_delay_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="PRE INPLAY PROFIT"
                                                    name="pre_inplay_profit_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'PRE INPLAY PROFIT is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.pre_inplay_profit_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="PRE INPLAY STAKE"
                                                    name="pre_inplay_stack_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'PRE INPLAY STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.pre_inplay_stack_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MIN ODDS"
                                                    name="min_odds_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MIN ODDS is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.min_odds_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MAX ODDS"
                                                    name="max_odds_tennis"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX ODDS is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Stennis.max_odds_tennis}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    name="unmatch_bet_tennis"
                                                    valuePropName="checked"
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {
                                                            formTennis.setFieldsValue({ 'unmatch_bet_tennis': e.target.checked })
                                                        }}

                                                        checked={unmatch_bet_tennis}
                                                    >
                                                        UNMATCH BET
                                                    </Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    name="lock_bet_tennis"
                                                    valuePropName="checked"
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {
                                                            formTennis.setFieldsValue({ 'lock_bet_tennis': e.target.checked })
                                                        }}

                                                        checked={lock_bet_tennis}
                                                    >
                                                        LOCK BET</Checkbox>
                                                </Form.Item>

                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    name="match_odds_tennis"
                                                    valuePropName="checked"
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {
                                                            formTennis.setFieldsValue({ 'match_odds_tennis': e.target.checked })
                                                        }}
                                                        checked={match_odds_tennis}
                                                    >MATCH ODDS</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    name="update_all_users_tennis"
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {
                                                            formTennis.setFieldsValue({ 'update_all_users_tennis': e.target.checked })
                                                        }}
                                                    >Click to update for all users</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Button type="primary"
                                                        htmlType="submit"
                                                        disabled={isDisabled}
                                                        className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', width: '140px' }}>
                                                        Update
                                                    </Button>
                                                </Form.Item>
                                            </div>

                                        </div>
                                    </Form>
                                </Card>
                            </div>
                        }

                        {
                            event_type_id == 1 &&
                            <div className='col-span-12 p-[.75rem]'>
                                <Card title="Soccer"  >
                                    <Form

                                        form={formSoccer}
                                        className='add-user-general-setting'
                                        name="basic"
                                        labelCol={{
                                            span: 8,
                                        }}
                                        wrapperCol={{
                                            span: 12,
                                        }}
                                        onFinish={handleSoccerSubmit}
                                        onFinishFailed={onFinishSoccerFailed}
                                        autoComplete="off"
                                    >
                                        <div className='grid grid-cols-12'>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MIN STAKE"
                                                    name="min_stack_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MIN STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={soccer.min_stack_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MIN STAKE"
                                                    name="min_stack_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MIN STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={soccer.min_stack_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MAX STAKE"
                                                    name="max_stack_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={soccer.max_stack_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MAX PROFIT"
                                                    name="max_profit_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX PROFIT is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={soccer.max_profit_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="Max Loss"
                                                    name="max_loss_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Max Loss is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.max_loss_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="BET DELAY"
                                                    name="bet_delay_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'BET DELAY is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.bet_delay_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="PRE INPLAY PROFIT"
                                                    name="pre_inplay_profit_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'PRE INPLAY PROFIT is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.pre_inplay_profit_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="PRE INPLAY STAKE"
                                                    name="pre_inplay_stack_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'PRE INPLAY STAKE is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.pre_inplay_stack_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12'>
                                                <Form.Item
                                                    label="MIN ODDS"
                                                    name="min_odds_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MIN ODDS is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.min_odds_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12' >
                                                <Form.Item
                                                    label="MAX ODDS"
                                                    name="max_odds_soccer"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'MAX ODDS is required.',
                                                        },
                                                    ]}
                                                >
                                                    <Input
                                                        className='lg:ml-[10px]'
                                                        max={Ssoccer.max_odds_soccer}
                                                    />
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    valuePropName="checked"
                                                    name="unmatch_bet_soccer"
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {

                                                            formSoccer.setFieldsValue({ 'unmatch_bet_soccer': e.target.checked })

                                                        }}

                                                        checked={unmatch_bet_soccer}
                                                    >UNMATCH BET</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    name="lock_bet_soccer"
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    valuePropName="checked"
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {

                                                            formSoccer.setFieldsValue({ 'lock_bet_soccer': e.target.checked })

                                                        }}

                                                        checked={lock_bet_soccer}
                                                    >LOCK BET</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    valuePropName="checked"
                                                    name="match_odds_soccer"
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {

                                                            formSoccer.setFieldsValue({ 'match_odds_soccer': e.target.checked })

                                                        }}

                                                        checked={match_odds_soccer}
                                                    >MATCH ODDS</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                    valuePropName="checked"
                                                    name="update_all_users_soccer"
                                                >
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={(e) => {
                                                            formSoccer.setFieldsValue({ 'update_all_users_soccer': e.target.checked })
                                                        }}
                                                    >Click to update for all users</Checkbox>
                                                </Form.Item>
                                            </div>
                                            <div className='col-span-12 flex items-center justify-center'>
                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 24,
                                                    }}
                                                >
                                                    <Button type="primary"
                                                        htmlType="submit"
                                                        disabled={isDisabled}
                                                        className='mt-[1rem] lg:ml-[10px]' style={{ background: 'linear-gradient(-180deg, #2E4B5E 0%, #243A48 82%)', width: '140px' }}>
                                                        Update
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form>
                                </Card>
                            </div>
                        }


                    </div>

                </div>
            </div >
        </>
    );
}

export default EventGeneralSetting;