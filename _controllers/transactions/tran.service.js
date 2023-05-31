const db = require('../../_helpers/db');


exports.createTransaction = async (param) =>{

    const { userId, username, tournamentId, admin_id, addedBy_name, filterype, previous_amount, current_amount, transaction_amount, transaction_date, transaction_time, transaction_status} = param;

    let description = '';
    switch (filterype) {
        case '0':
            description = `${transaction_amount} Coins Deducted For Tournament Registration`;
            break;
        case '1':
            description = `${transaction_amount} Coins Added For Tournament Won`;
            break;
        case '2':
            description = `${transaction_amount} Coins Refunded Against Tournament Cancel`;
            break;
        case '3':
            description = `${transaction_amount} Coins Transferred To User Account`;
            break;
        case '4':
            description = `${transaction_amount} Coins Added to Wallet`;
            break;
        case '5':
            description = "";
            break;
        case '6':
            description = `${transaction_amount} Coins Reverted to Wallet`;
            break;
        case '7':
            description = `${transaction_amount} Coins Added to Wallet for watching Ad's`;
            break;
    }

    //0: Tournament Register,  1: Tournament Won, 2: Tournament Refund, 3: Wallet Debit,
    // 4: Wallet Added, 5 : Wallet Withdrwal, 6: Payment Revert, 7 : Added From Ads

    const tranObj = {
        userId: userId,
        username: username,
        tournamentId: tournamentId,
        admin_id: admin_id,
        filterype: filterype,
        addedBy_name: addedBy_name,
        previous_amount: previous_amount,
        current_amount: current_amount,
        transaction_amount: transaction_amount,
        description: description,
        transaction_date: transaction_date,
        transaction_time: transaction_time,
        transaction_status: transaction_status
    }

    return tranObj;
}