import Account from '../types/Account.js'
import AccountInput from '../types/AccountInput.js'
import AccountService from '../../services/account.service.js'
import { GraphQLBoolean, GraphQLInt } from 'graphql'

const accountMutation = {
    createAccount: {
        type: Account,
        args: {
            account: {
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args){
            return AccountService.createAccount(args.account)
        }
    },
    delteAccount: {
        type: GraphQLBoolean,
        args: {
            id:{
                name: "id",
                type: GraphQLInt
            }
        },
        resolve(_, args) {
            AccountService.deleteAccount(args.id)
        }
    },
    updateAccount: {
        type: Account,
        args:{
            account:{
                name: "accounnt",
                type: AccountInput
            }
        },
        resolve(_, args){
            return AccountService.updateAccount(args.account)
        }
    }
}
args
 export default accountMutation