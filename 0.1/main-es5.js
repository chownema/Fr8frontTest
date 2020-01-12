(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../Fr8models/dist/helper/modelUtils.js":
/*!**********************************************!*\
  !*** ../Fr8models/dist/helper/modelUtils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ModelUtils {
    constructor() { }
    // Merges the object fields if the object matchest the src object fields
    static merge(src, obj) {
        if (src && obj) {
            for (var key in src) {
                if (key && src.hasOwnProperty(key) && obj[key])
                    src[key] = obj[key];
            }
        }
        return src;
    }
    static keyValueToList(src) {
        const keys = Object.keys(src);
        const list = [];
        keys.forEach((value) => {
            list.push(src[value]);
        });
        return list;
    }
    static keysToLowerCase(obj) {
        var key, keys = Object.keys(obj);
        var n = keys.length;
        var newobj = {};
        while (n--) {
            key = keys[n];
            newobj[key.toLowerCase()] = obj[key];
        }
        return newobj;
    }
    static valuesToLowerCase(obj) {
        obj.forEach((item) => {
            const idx = obj.indexOf(item);
            obj[idx] = item.toLowerCase();
        });
        return obj;
    }
    static uuidv4() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
exports.ModelUtils = ModelUtils;


/***/ }),

/***/ "../Fr8models/dist/index.js":
/*!**********************************!*\
  !*** ../Fr8models/dist/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Domain
__export(__webpack_require__(/*! ./model/domain/user */ "../Fr8models/dist/model/domain/user.js"));
__export(__webpack_require__(/*! ./model/domain/company */ "../Fr8models/dist/model/domain/company.js"));
__export(__webpack_require__(/*! ./model/domain/dispatchDefinition */ "../Fr8models/dist/model/domain/dispatchDefinition.js"));
__export(__webpack_require__(/*! ./model/domain/dispatchRecord */ "../Fr8models/dist/model/domain/dispatchRecord.js"));
//// Quote
__export(__webpack_require__(/*! ./model/domain/quote/pricingLevel */ "../Fr8models/dist/model/domain/quote/pricingLevel.js"));
__export(__webpack_require__(/*! ./model/domain/quote/priceConfig */ "../Fr8models/dist/model/domain/quote/priceConfig.js"));
__export(__webpack_require__(/*! ./model/domain/quote/quoteInterfaceRequest */ "../Fr8models/dist/model/domain/quote/quoteInterfaceRequest.js"));
__export(__webpack_require__(/*! ./model/domain/quote/quoteInterfaceResponse */ "../Fr8models/dist/model/domain/quote/quoteInterfaceResponse.js"));
__export(__webpack_require__(/*! ./model/domain/quote/pricingRateLevel */ "../Fr8models/dist/model/domain/quote/pricingRateLevel.js"));
__export(__webpack_require__(/*! ./model/domain/quote/priceRule */ "../Fr8models/dist/model/domain/quote/priceRule.js"));
__export(__webpack_require__(/*! ./model/domain/quote/priceRuleSet */ "../Fr8models/dist/model/domain/quote/priceRuleSet.js"));
__export(__webpack_require__(/*! ./model/domain/quote/priceRuleLocationConditional */ "../Fr8models/dist/model/domain/quote/priceRuleLocationConditional.js"));
__export(__webpack_require__(/*! ./model/domain/quote/priceRuleConfig */ "../Fr8models/dist/model/domain/quote/priceRuleConfig.js"));
__export(__webpack_require__(/*! ./model/domain/quote/ratingCard */ "../Fr8models/dist/model/domain/quote/ratingCard.js"));
__export(__webpack_require__(/*! ./model/domain/quote/quote */ "../Fr8models/dist/model/domain/quote/quote.js"));
// Exception
__export(__webpack_require__(/*! ./model/exception/notFoundException */ "../Fr8models/dist/model/exception/notFoundException.js"));
__export(__webpack_require__(/*! ./model/exception/forbiddenException */ "../Fr8models/dist/model/exception/forbiddenException.js"));
__export(__webpack_require__(/*! ./model/exception/badRequestException */ "../Fr8models/dist/model/exception/badRequestException.js"));
// Request
__export(__webpack_require__(/*! ./model/request/createRatingCardRequest */ "../Fr8models/dist/model/request/createRatingCardRequest.js"));
__export(__webpack_require__(/*! ./model/request/updateRatingCardRequest */ "../Fr8models/dist/model/request/updateRatingCardRequest.js"));
__export(__webpack_require__(/*! ./model/request/savePriceRuleConfigRequest */ "../Fr8models/dist/model/request/savePriceRuleConfigRequest.js"));
__export(__webpack_require__(/*! ./model/request/dataContainerRequest */ "../Fr8models/dist/model/request/dataContainerRequest.js"));
__export(__webpack_require__(/*! ./model/request/loginRequest */ "../Fr8models/dist/model/request/loginRequest.js"));
__export(__webpack_require__(/*! ./model/request/registerRequest */ "../Fr8models/dist/model/request/registerRequest.js"));
__export(__webpack_require__(/*! ./model/request/saveUserRequest */ "../Fr8models/dist/model/request/saveUserRequest.js"));
__export(__webpack_require__(/*! ./model/request/updateUserRequest */ "../Fr8models/dist/model/request/updateUserRequest.js"));
__export(__webpack_require__(/*! ./model/request/saveCompanyRequest */ "../Fr8models/dist/model/request/saveCompanyRequest.js"));
__export(__webpack_require__(/*! ./model/request/updateCompanyRequest */ "../Fr8models/dist/model/request/updateCompanyRequest.js"));
__export(__webpack_require__(/*! ./model/request/resetPasswordRequest */ "../Fr8models/dist/model/request/resetPasswordRequest.js"));
__export(__webpack_require__(/*! ./model/request/getRecordsRequest */ "../Fr8models/dist/model/request/getRecordsRequest.js"));
// Response
__export(__webpack_require__(/*! ./model/response/loginResponse */ "../Fr8models/dist/model/response/loginResponse.js"));
__export(__webpack_require__(/*! ./model/response/tokenVerificationResponse */ "../Fr8models/dist/model/response/tokenVerificationResponse.js"));
// Super
__export(__webpack_require__(/*! ./model/response/getRecordsResponse */ "../Fr8models/dist/model/response/getRecordsResponse.js"));
__export(__webpack_require__(/*! ./model/response/getCompanyResponse */ "../Fr8models/dist/model/response/getCompanyResponse.js"));
__export(__webpack_require__(/*! ./model/response/getCompaniesResponse */ "../Fr8models/dist/model/response/getCompaniesResponse.js"));
__export(__webpack_require__(/*! ./model/response/getCompanyUserResponse */ "../Fr8models/dist/model/response/getCompanyUserResponse.js"));
__export(__webpack_require__(/*! ./model/response/getCompanyUsersResponse */ "../Fr8models/dist/model/response/getCompanyUsersResponse.js"));
__export(__webpack_require__(/*! ./model/response/getRatingCardResponse */ "../Fr8models/dist/model/response/getRatingCardResponse.js"));
__export(__webpack_require__(/*! ./model/response/getRatingCardsResponse */ "../Fr8models/dist/model/response/getRatingCardsResponse.js"));
__export(__webpack_require__(/*! ./model/response/getQuotesResponse */ "../Fr8models/dist/model/response/getQuotesResponse.js"));
__export(__webpack_require__(/*! ./model/response/getPriceRuleConfigs */ "../Fr8models/dist/model/response/getPriceRuleConfigs.js"));
__export(__webpack_require__(/*! ./model/response/resetPasswordResponse */ "../Fr8models/dist/model/response/resetPasswordResponse.js"));
__export(__webpack_require__(/*! ./model/response/updateUserResponse */ "../Fr8models/dist/model/response/updateUserResponse.js"));
__export(__webpack_require__(/*! ./model/response/updateCompanyResponse */ "../Fr8models/dist/model/response/updateCompanyResponse.js"));
__export(__webpack_require__(/*! ./model/response/updateRatingCardResponse */ "../Fr8models/dist/model/response/updateRatingCardResponse.js"));
__export(__webpack_require__(/*! ./model/response/saveCompanyResponse */ "../Fr8models/dist/model/response/saveCompanyResponse.js"));
__export(__webpack_require__(/*! ./model/response/saveUserResponse */ "../Fr8models/dist/model/response/saveUserResponse.js"));
__export(__webpack_require__(/*! ./model/response/saveRatingCardResponse */ "../Fr8models/dist/model/response/saveRatingCardResponse.js"));
__export(__webpack_require__(/*! ./model/response/saveCompanyResponse */ "../Fr8models/dist/model/response/saveCompanyResponse.js"));
__export(__webpack_require__(/*! ./model/response/registerResponse */ "../Fr8models/dist/model/response/registerResponse.js"));
// Utils
__export(__webpack_require__(/*! ./model/utils/errorResponse */ "../Fr8models/dist/model/utils/errorResponse.js"));
__export(__webpack_require__(/*! ./model/utils/userInfoFromToken */ "../Fr8models/dist/model/utils/userInfoFromToken.js"));
// Helper
__export(__webpack_require__(/*! ./helper/modelUtils */ "../Fr8models/dist/helper/modelUtils.js"));


/***/ }),

/***/ "../Fr8models/dist/model/domain/company.js":
/*!*************************************************!*\
  !*** ../Fr8models/dist/model/domain/company.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class companyTemplate {
    constructor(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail, createdAt, updatedAt) {
        this.id = id;
        this.parentId = parentId;
        this.childrenIds = childrenIds;
        this.companyName = companyName;
        this.companyMainEmail = companyMainEmail;
        this.companyNotifyEmail = companyNotifyEmail;
        this.companyQuoteEmail = companyQuoteEmail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.companyTemplate = companyTemplate;
class Company extends companyTemplate {
    constructor(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail, createdAt, updatedAt) {
        super(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail, createdAt, updatedAt);
        this.id = id;
        this.parentId = parentId;
        this.childrenIds = childrenIds;
        this.companyName = companyName;
        this.companyMainEmail = companyMainEmail;
        this.companyNotifyEmail = companyNotifyEmail;
        this.companyQuoteEmail = companyQuoteEmail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.Company = Company;
/**
 * This model may or may not reflect the db model, this is to give all the fields that can be added to
 * the company object when joining queries
 */
class CompanyExtended extends companyTemplate {
    constructor(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail, createdAt, updatedAt, users) {
        super(id, parentId, childrenIds, companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail, createdAt, updatedAt);
        this.id = id;
        this.parentId = parentId;
        this.childrenIds = childrenIds;
        this.companyName = companyName;
        this.companyMainEmail = companyMainEmail;
        this.companyNotifyEmail = companyNotifyEmail;
        this.companyQuoteEmail = companyQuoteEmail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.users = users;
    }
}
exports.CompanyExtended = CompanyExtended;


/***/ }),

/***/ "../Fr8models/dist/model/domain/dispatchDefinition.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/domain/dispatchDefinition.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class JobDefinition {
    constructor(pricingRules) {
        this.pricingRules = pricingRules;
    }
}
exports.JobDefinition = JobDefinition;


/***/ }),

/***/ "../Fr8models/dist/model/domain/dispatchRecord.js":
/*!********************************************************!*\
  !*** ../Fr8models/dist/model/domain/dispatchRecord.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DispatchRecord {
    constructor(args) {
        this.id = '';
        this.flags = '';
        this.jobType = '';
        this.docketId = '';
        this.orderRefId = '';
        this.deliveryRefId = '';
        this.pickupRefId = ''; // TODO= not in back
        this.iCOSRef = 0;
        this.exportCertNumber = '';
        this.isNoDisp = false;
        this.isQuote = false;
        this.pickupRefId = ''; // TODO= not in back
        this.shipperName = '';
        this.shipperAddr = '';
        this.consigneeName = '';
        this.consigneeAddr = {}; // NOTE= multi line (4 lines) address
        this.createdDate = ''; // TODO= best to be a real date obj
        this.status = ''; // TODO= best to be a real enum obj
        this.serviceType = ''; // TODO= best to be a real enum obj
        this.hirePallets = 0;
        this.nonHirePallets = 0;
        this.lifts = 0;
        this.hireRetn = 0;
        this.goodsType = 0;
        this.reqTempDeg = 0;
        this.actualTempDeg = 0;
        this.unloadFee = 0;
        this.noChg = false;
        this.noDisp = false;
        this.reqPickupDateTime = ''; // TODO= best to be a real date obj
        this.actPickupDateTime = ''; // TODO= best to be a real date obj
        this.reqDeliveryTime = '';
        this.actDeliveryTime = '';
        this.deliveredTo = '';
        this.hasPOD = false;
        this.comments = ''; // TODO= set limit 255
        this.nextDepot = ''; // TODO= load from db
        this.deliveryDepot = ''; // TODO= load from db
        this.currentDepot = ''; // TODO: load from db
        this.shipPayer = '';
        // Load in kwargs here
        Object.assign(this, args);
    }
}
exports.DispatchRecord = DispatchRecord;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/priceConfig.js":
/*!***********************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/priceConfig.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceConfig {
    constructor(ratingCard, tonneRate, massRate, palletRate, gstRate, flatCost, fafRate, minCharge) {
        this.ratingCard = ratingCard;
        this.tonneRate = tonneRate;
        this.massRate = massRate;
        this.palletRate = palletRate;
        this.gstRate = gstRate;
        this.flatCost = flatCost;
        this.fafRate = fafRate;
        this.minCharge = minCharge;
    }
}
exports.PriceConfig = PriceConfig;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/priceRule.js":
/*!*********************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/priceRule.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceRule {
    constructor(stepNo, type) {
        this.stepNo = stepNo;
        this.type = type;
        this.compareSteps = {
            stepA: 0,
            stepB: 0
        };
    }
    setAsGreaterNext(stepA, stepB) {
        this.stepNo = PriceRule.NON_SEQ_STEP_NO; // reserved for non sequenciable steps i.e. filter out
        this.type = PriceRule.TYPE.GET_GREATER_NEXT;
        this.compareSteps.stepA = stepA;
        this.compareSteps.stepB = stepB;
    }
}
// Type of Pricing Rules
PriceRule.TYPE = {
    RATING_CARD: 'type_rating_card',
    TONNE_RATE: 'type_tonne_rate',
    MASS_RATE: 'type_mass_rate',
    PALLET_RATE: 'type_pallet_rate',
    // Additional Costs
    DRIVER_COST: 'type_driver_cost',
    UPLIFT_COST: 'type_uplift_cost',
    FUEL_ADJUST_FEE: 'type_fuel_adjust_fee',
    PALLET_COST: 'type_pallet_cost',
    MIN_CHARGE: 'type_min_charge',
    FLAT_CHARGE: 'type_flat_charge',
    GST: 'type_gst',
    GET_GREATER_NEXT: 'type_get_greater_next' // compares next step and chooses greater
};
PriceRule.NON_SEQ_STEP_NO = -1;
exports.PriceRule = PriceRule;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/priceRuleConfig.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/priceRuleConfig.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceRuleConfig {
    constructor(id, companyName, companyId, priceRuleSet, priceRuleLocationConditionals) {
        this.id = id;
        this.companyName = companyName;
        this.companyId = companyId;
        this.priceRuleSet = priceRuleSet;
        this.priceRuleLocationConditionals = priceRuleLocationConditionals;
    }
}
exports.PriceRuleConfig = PriceRuleConfig;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/priceRuleLocationConditional.js":
/*!****************************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/priceRuleLocationConditional.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceRuleLocationConditional {
    constructor(locationList, priceRuleSet, id, name) {
        this.locationList = locationList;
        this.priceRuleSet = priceRuleSet;
        this.id = id;
        this.name = name;
    }
}
exports.PriceRuleLocationConditional = PriceRuleLocationConditional;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/priceRuleSet.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/priceRuleSet.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PriceRuleSet {
    constructor(priceRules) {
        this.priceRules = priceRules;
    }
    getPriceRules() {
        return this.priceRules.filter((rule) => {
            return rule && rule.stepNo && rule.stepNo > -1;
        });
    }
}
exports.PriceRuleSet = PriceRuleSet;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/pricingLevel.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/pricingLevel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
* This file stores all of the models dedicated to the pricing level logic
*/
Object.defineProperty(exports, "__esModule", { value: true });
class PricingLevel {
    constructor(m3, tonne, cost) {
        this.m3 = m3;
        this.tonne = tonne;
        this.cost = cost;
    }
}
exports.PricingLevel = PricingLevel;
class PricingLevelPair {
    constructor(locationKey, pricingLevelList) {
        this.locationKey = locationKey;
        this.pricingLevelList = pricingLevelList;
    }
}
exports.PricingLevelPair = PricingLevelPair;
class MinorLocationSet {
    constructor(pricingLevelPair) {
        this.pricingLevelPair = pricingLevelPair;
    }
}
exports.MinorLocationSet = MinorLocationSet;
class MajorLocationSet {
    constructor(pricingLevelPair) {
        this.pricingLevelPair = pricingLevelPair;
    }
}
exports.MajorLocationSet = MajorLocationSet;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/pricingRateLevel.js":
/*!****************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/pricingRateLevel.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PricingRateLevel {
    constructor(cost_p_tonne, cost_p_m3) {
        this.cost_p_tonne = cost_p_tonne;
        this.cost_p_m3 = cost_p_m3;
    }
}
exports.PricingRateLevel = PricingRateLevel;
class PricingRateLevelPair {
    constructor(locationKey, pricingRateLevel) {
        this.locationKey = locationKey;
        this.pricingRateLevel = pricingRateLevel;
    }
}
exports.PricingRateLevelPair = PricingRateLevelPair;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/quote.js":
/*!*****************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/quote.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Quote {
    constructor(id, iCOSRef, quoteId, companyId, companyName, createdAt, updatedAt, weight, mass, cost, to, from, parentCompanyNote, parentCompanyId) {
        this.id = id;
        this.iCOSRef = iCOSRef;
        this.quoteId = quoteId;
        this.companyId = companyId;
        this.companyName = companyName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.weight = weight;
        this.mass = mass;
        this.cost = cost;
        this.to = to;
        this.from = from;
        this.parentCompanyNote = parentCompanyNote;
        this.parentCompanyId = parentCompanyId;
    }
}
exports.Quote = Quote;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/quoteInterfaceRequest.js":
/*!*********************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/quoteInterfaceRequest.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class QuoteInterfaceRequest {
    constructor(to = '', from = '', weight = 0, mass = 0, palletAmount = 0, driverCost = 0, upliftCost = 0) {
        this.to = to;
        this.from = from;
        this.weight = weight;
        this.mass = mass;
        this.palletAmount = palletAmount;
        this.driverCost = driverCost;
        this.upliftCost = upliftCost;
        this.totalCalculatedCost = 0;
        this.totalCost = 0;
        this.tonne = this.weight * 0.001;
    }
}
exports.QuoteInterfaceRequest = QuoteInterfaceRequest;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/quoteInterfaceResponse.js":
/*!**********************************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/quoteInterfaceResponse.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class QuoteInterfaceResponse {
    constructor(success, cost) {
        this.success = success;
        this.cost = cost;
    }
}
exports.QuoteInterfaceResponse = QuoteInterfaceResponse;


/***/ }),

/***/ "../Fr8models/dist/model/domain/quote/ratingCard.js":
/*!**********************************************************!*\
  !*** ../Fr8models/dist/model/domain/quote/ratingCard.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CardData {
    constructor(id, companyId, parentCompany) {
        this.id = id;
        this.companyId = companyId;
        this.parentCompany = parentCompany;
    }
}
exports.CardData = CardData;
class RatingCard {
    constructor(id, majorLocations, minorLocations, pricingRateLevelList, cardData) {
        this.id = id;
        this.majorLocations = majorLocations;
        this.minorLocations = minorLocations;
        this.pricingRateLevelList = pricingRateLevelList;
        this.cardData = cardData;
    }
}
exports.RatingCard = RatingCard;


/***/ }),

/***/ "../Fr8models/dist/model/domain/user.js":
/*!**********************************************!*\
  !*** ../Fr8models/dist/model/domain/user.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UserTemplate {
    constructor(id, username, password, companyId, parentCompanyId, updatedAt, createdAt) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.companyId = companyId;
        this.parentCompanyId = parentCompanyId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}
exports.UserTemplate = UserTemplate;
class User extends UserTemplate {
    constructor(id, username, password, companyId, parentCompanyId, updatedAt, createdAt) {
        super(id, username, password, companyId, parentCompanyId, updatedAt, createdAt);
        this.id = id;
        this.username = username;
        this.password = password;
        this.companyId = companyId;
        this.parentCompanyId = parentCompanyId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
}
exports.User = User;
/**
 * This model may or may not reflect the db model, this is to give all the fields that can be added to
 * the company object when joining queries
 */
class UserExtended extends UserTemplate {
    constructor(id, username, password, companyId, parentCompanyId, updatedAt, createdAt, company) {
        super(id, username, password, companyId, parentCompanyId, updatedAt, createdAt);
        this.id = id;
        this.username = username;
        this.password = password;
        this.companyId = companyId;
        this.parentCompanyId = parentCompanyId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.company = company;
    }
}
exports.UserExtended = UserExtended;


/***/ }),

/***/ "../Fr8models/dist/model/exception/badRequestException.js":
/*!****************************************************************!*\
  !*** ../Fr8models/dist/model/exception/badRequestException.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BadRequestException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.BadRequestException = BadRequestException;


/***/ }),

/***/ "../Fr8models/dist/model/exception/forbiddenException.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/exception/forbiddenException.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ForbiddenException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ForbiddenException = ForbiddenException;


/***/ }),

/***/ "../Fr8models/dist/model/exception/notFoundException.js":
/*!**************************************************************!*\
  !*** ../Fr8models/dist/model/exception/notFoundException.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundException extends Error {
    constructor(message) {
        super(message);
    }
}
exports.NotFoundException = NotFoundException;


/***/ }),

/***/ "../Fr8models/dist/model/request/createRatingCardRequest.js":
/*!******************************************************************!*\
  !*** ../Fr8models/dist/model/request/createRatingCardRequest.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CreateRatingCardRequest {
    constructor(companyId, majorLocations, minorLocations, pricingRateLevelList) {
        this.companyId = companyId;
        this.majorLocations = majorLocations;
        this.minorLocations = minorLocations;
        this.pricingRateLevelList = pricingRateLevelList;
    }
}
exports.CreateRatingCardRequest = CreateRatingCardRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/dataContainerRequest.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/request/dataContainerRequest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DataContainerRequest {
    constructor(data) {
        this.data = data;
    }
}
exports.DataContainerRequest = DataContainerRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/getRecordsRequest.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/request/getRecordsRequest.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetRecordsRequest {
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
        this.page = this.page && this.page > 0 ? this.page : 0;
        this.pageSize = this.pageSize && this.pageSize > 0 ? this.pageSize : 20;
    }
}
exports.GetRecordsRequest = GetRecordsRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/loginRequest.js":
/*!*******************************************************!*\
  !*** ../Fr8models/dist/model/request/loginRequest.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LoginRequest {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
exports.LoginRequest = LoginRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/registerRequest.js":
/*!**********************************************************!*\
  !*** ../Fr8models/dist/model/request/registerRequest.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RegisterRequest {
    constructor(username, password, companyName, companyMainEmail, companyQuoteEmail, companyNotifyEmail) {
        this.username = username;
        this.password = password;
        this.companyName = companyName;
        this.companyMainEmail = companyMainEmail;
        this.companyQuoteEmail = companyQuoteEmail;
        this.companyNotifyEmail = companyNotifyEmail;
    }
}
exports.RegisterRequest = RegisterRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/resetPasswordRequest.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/request/resetPasswordRequest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ResetPasswordRequest {
    constructor(userId, password) {
        this.userId = userId;
        this.password = password;
    }
}
exports.ResetPasswordRequest = ResetPasswordRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/saveCompanyRequest.js":
/*!*************************************************************!*\
  !*** ../Fr8models/dist/model/request/saveCompanyRequest.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SaveCompanyRequest {
    constructor(companyName, companyMainEmail, companyQuoteEmail, companyNotifyEmail) {
        this.companyName = companyName;
        this.companyMainEmail = companyMainEmail;
        this.companyQuoteEmail = companyQuoteEmail;
        this.companyNotifyEmail = companyNotifyEmail;
    }
}
exports.SaveCompanyRequest = SaveCompanyRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/savePriceRuleConfigRequest.js":
/*!*********************************************************************!*\
  !*** ../Fr8models/dist/model/request/savePriceRuleConfigRequest.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SavePriceRuleConfigRequest {
    constructor(companyId, priceRuleConfigs) {
        this.companyId = companyId;
        this.priceRuleConfigs = priceRuleConfigs;
    }
}
exports.SavePriceRuleConfigRequest = SavePriceRuleConfigRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/saveUserRequest.js":
/*!**********************************************************!*\
  !*** ../Fr8models/dist/model/request/saveUserRequest.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SaveUserRequest {
    constructor(username, password, companyId) {
        this.username = username;
        this.password = password;
        this.companyId = companyId;
    }
}
exports.SaveUserRequest = SaveUserRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/updateCompanyRequest.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/request/updateCompanyRequest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCompanyRequest {
    constructor(company) {
        this.company = company;
    }
}
exports.UpdateCompanyRequest = UpdateCompanyRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/updateRatingCardRequest.js":
/*!******************************************************************!*\
  !*** ../Fr8models/dist/model/request/updateRatingCardRequest.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateRatingCardRequest {
    constructor(id, ratingCard) {
        this.id = id;
        this.ratingCard = ratingCard;
    }
}
exports.UpdateRatingCardRequest = UpdateRatingCardRequest;


/***/ }),

/***/ "../Fr8models/dist/model/request/updateUserRequest.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/request/updateUserRequest.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserRequest {
    constructor(user) {
        this.user = user;
    }
}
exports.UpdateUserRequest = UpdateUserRequest;


/***/ }),

/***/ "../Fr8models/dist/model/response/getCompaniesResponse.js":
/*!****************************************************************!*\
  !*** ../Fr8models/dist/model/response/getCompaniesResponse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetCompaniesResponse {
    constructor(companies) {
        this.companies = companies;
    }
}
exports.GetCompaniesResponse = GetCompaniesResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getCompanyResponse.js":
/*!**************************************************************!*\
  !*** ../Fr8models/dist/model/response/getCompanyResponse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetCompanyResponse {
    constructor(company) {
        this.company = company;
    }
}
exports.GetCompanyResponse = GetCompanyResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getCompanyUserResponse.js":
/*!******************************************************************!*\
  !*** ../Fr8models/dist/model/response/getCompanyUserResponse.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetCompanyUserResponse {
    constructor(user) {
        this.user = user;
    }
}
exports.GetCompanyUserResponse = GetCompanyUserResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getCompanyUsersResponse.js":
/*!*******************************************************************!*\
  !*** ../Fr8models/dist/model/response/getCompanyUsersResponse.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetCompanyUsersResponse {
    // Returns a list of companies with their users
    constructor(companies) {
        this.companies = companies;
    }
}
exports.GetCompanyUsersResponse = GetCompanyUsersResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getPriceRuleConfigs.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/response/getPriceRuleConfigs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getRecordsResponse_1 = __webpack_require__(/*! ./getRecordsResponse */ "../Fr8models/dist/model/response/getRecordsResponse.js");
class GetPriceRuleConfigsResponse extends getRecordsResponse_1.GetRecordsResponse {
    constructor(page, pageSize, totalCount, records) {
        super(page, pageSize, totalCount);
        this.page = page;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.records = records;
    }
}
exports.GetPriceRuleConfigsResponse = GetPriceRuleConfigsResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getQuotesResponse.js":
/*!*************************************************************!*\
  !*** ../Fr8models/dist/model/response/getQuotesResponse.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const getRecordsResponse_1 = __webpack_require__(/*! ./getRecordsResponse */ "../Fr8models/dist/model/response/getRecordsResponse.js");
class GetQuotesResponse extends getRecordsResponse_1.GetRecordsResponse {
    constructor(page, pageSize, totalCount, records) {
        super(page, pageSize, totalCount);
        this.page = page;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
        this.records = records;
    }
}
exports.GetQuotesResponse = GetQuotesResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getRatingCardResponse.js":
/*!*****************************************************************!*\
  !*** ../Fr8models/dist/model/response/getRatingCardResponse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetRatingCardResponse {
    constructor(ratingCard) {
        this.ratingCard = ratingCard;
    }
}
exports.GetRatingCardResponse = GetRatingCardResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getRatingCardsResponse.js":
/*!******************************************************************!*\
  !*** ../Fr8models/dist/model/response/getRatingCardsResponse.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetRatingCardsResponse {
    constructor(ratingCards) {
        this.ratingCards = ratingCards;
    }
}
exports.GetRatingCardsResponse = GetRatingCardsResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/getRecordsResponse.js":
/*!**************************************************************!*\
  !*** ../Fr8models/dist/model/response/getRecordsResponse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GetRecordsResponse {
    constructor(page, pageSize, totalCount) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalCount = totalCount;
    }
}
exports.GetRecordsResponse = GetRecordsResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/loginResponse.js":
/*!*********************************************************!*\
  !*** ../Fr8models/dist/model/response/loginResponse.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LoginResponse {
    constructor(username, token, company) {
        this.username = username;
        this.token = token;
        this.company = company;
    }
}
exports.LoginResponse = LoginResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/registerResponse.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/response/registerResponse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RegisterResponse {
    constructor(user, company) {
        this.user = user;
        this.company = company;
    }
}
exports.RegisterResponse = RegisterResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/resetPasswordResponse.js":
/*!*****************************************************************!*\
  !*** ../Fr8models/dist/model/response/resetPasswordResponse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ResetPasswordResponse {
    constructor(user) {
        this.user = user;
    }
}
exports.ResetPasswordResponse = ResetPasswordResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/saveCompanyResponse.js":
/*!***************************************************************!*\
  !*** ../Fr8models/dist/model/response/saveCompanyResponse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SaveCompanyResponse {
    constructor(company) {
        this.company = company;
    }
}
exports.SaveCompanyResponse = SaveCompanyResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/saveRatingCardResponse.js":
/*!******************************************************************!*\
  !*** ../Fr8models/dist/model/response/saveRatingCardResponse.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SaveRatingCardResponse {
    constructor(ratingCard) {
        this.ratingCard = ratingCard;
    }
}
exports.SaveRatingCardResponse = SaveRatingCardResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/saveUserResponse.js":
/*!************************************************************!*\
  !*** ../Fr8models/dist/model/response/saveUserResponse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SaveUserResponse {
    constructor(user, company) {
        this.user = user;
        this.company = company;
    }
}
exports.SaveUserResponse = SaveUserResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/tokenVerificationResponse.js":
/*!*********************************************************************!*\
  !*** ../Fr8models/dist/model/response/tokenVerificationResponse.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TokenVerificationResponse {
    constructor(errorMessage, user) {
        this.errorMessage = errorMessage;
        this.user = user;
    }
}
exports.TokenVerificationResponse = TokenVerificationResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/updateCompanyResponse.js":
/*!*****************************************************************!*\
  !*** ../Fr8models/dist/model/response/updateCompanyResponse.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateCompanyResponse {
    constructor(company) {
        this.company = company;
    }
}
exports.UpdateCompanyResponse = UpdateCompanyResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/updateRatingCardResponse.js":
/*!********************************************************************!*\
  !*** ../Fr8models/dist/model/response/updateRatingCardResponse.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateRatingCardResponse {
    constructor(ratingCard) {
        this.ratingCard = ratingCard;
    }
}
exports.UpdateRatingCardResponse = UpdateRatingCardResponse;


/***/ }),

/***/ "../Fr8models/dist/model/response/updateUserResponse.js":
/*!**************************************************************!*\
  !*** ../Fr8models/dist/model/response/updateUserResponse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UpdateUserResponse {
    constructor(user) {
        this.user = user;
    }
}
exports.UpdateUserResponse = UpdateUserResponse;


/***/ }),

/***/ "../Fr8models/dist/model/utils/errorResponse.js":
/*!******************************************************!*\
  !*** ../Fr8models/dist/model/utils/errorResponse.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(error, message) {
        this.error = error;
        this.message = message;
    }
}
exports.ErrorResponse = ErrorResponse;


/***/ }),

/***/ "../Fr8models/dist/model/utils/userInfoFromToken.js":
/*!**********************************************************!*\
  !*** ../Fr8models/dist/model/utils/userInfoFromToken.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class UserInfoFromToken {
    // Treat as a session class
    constructor(userId, parentCompanyId, companyId, companyName, username, access) {
        this.userId = userId;
        this.parentCompanyId = parentCompanyId;
        this.companyId = companyId;
        this.companyName = companyName;
        this.username = username;
        this.access = access;
    }
}
exports.UserInfoFromToken = UserInfoFromToken;


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-white justify-content-between\">\n    <div>\n        <!-- become dynamic post mvp -->\n        <img src=\"assets/titus-logo.png\" class=\"mt-1 mr-2 float-left img-thumbnail\" style=\"background-color: black; filter: invert(100%);\">\n        <h1 class=\"mr-3 float-left\">{{'TITUS TRANSPORT'}}</h1>\n    </div>\n    <div [hidden]=\"!isLoggedIn\">\n        <a routerLink=\"login\" (click)=\"logout()\" class=\"nav-link float-right\" routerLinkActive=\"active\">\n            Logout\n        </a>\n        <div class=\"float-right pt-2 pt-2\">\n            {{username}} | {{altCompanyName}}\n        </div>\n    </div>\n</nav>\n\n<div class=\"row\">\n    <div [hidden]=\"!isLoggedIn\" class=\"col-md-2 card\">\n        <div class=\"card-body\">\n            <div class=\"container-fluid\">\n                <ul class=\"navbar-nav\">\n\n                    <li [hidden]=\"isLoggedIn || (!enabledFeature.login || !enabledPermission.login)\" class=\"nav-item\">\n                        <a routerLink=\"login\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Login\n                        </a>\n                    </li>\n\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.dispatch || !enabledPermission.dispatch)\" class=\"nav-item\">\n                        <a routerLink=\"dispatch\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Freight Dispatch\n                        </a>\n                    </li> \n\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.quote || !enabledPermission.quote)\" class=\"nav-item\">\n                        <a routerLink=\"dispatch/quote\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Dispatch Quotes\n                        </a>\n                    </li> \n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.user || !enabledPermission.user)\" class=\"nav-item\">\n                        <a routerLink=\"user\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Manage Users\n                        </a>\n                    </li>\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.company || !enabledPermission.company)\" class=\"nav-item\">\n                        <a routerLink=\"company\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Manage Customers\n                        </a>\n                    </li>\n\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.uploadDispatch || !enabledPermission.uploadDispatch)\" class=\"nav-item\">\n                        <a routerLink=\"dispatch/upload\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Import CSV\n                        </a>\n                    </li>\n\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.ratingCard || !enabledPermission.ratingCard)\" class=\"nav-item\">\n                        <a routerLink=\"rating-card\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Manage Rating Card\n                        </a>\n                    </li>\n\n                    <li [hidden]=\"!isLoggedIn || (!enabledFeature.priceRule || !enabledPermission.priceRule)\" class=\"nav-item\">\n                        <a routerLink=\"price-rule\" class=\"nav-link\" routerLinkActive=\"active\">\n                            Manage Price Rules\n                        </a>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-md-9\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<ngx-spinner></ngx-spinner>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company-add/company-add.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company-add/company-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <button [routerLink]=\"['/company']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n\n<h2 *ngIf=\"!isEdit\">Create Company</h2>\n<h2 *ngIf=\"isEdit\">Update Company</h2>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Customer Name</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"CompanyName\" \n          #CompanyName />\n      </div>\n      <div *ngIf=\"angForm.controls['CompanyName'].invalid && (angForm.controls['CompanyName'].dirty || angForm.controls['CompanyName'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['CompanyName'].errors.required\">\n          Customer Name is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Main Email</label>\n        <input type=\"text\" class=\"form-control\"\n        formControlName=\"CompanyMainEmail\" \n        #CompanyMainEmail/>\n      </div>\n      <div *ngIf=\"!isEdit && angForm.controls['CompanyMainEmail'].invalid && (angForm.controls['CompanyMainEmail'].dirty || angForm.controls['CompanyMainEmail'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['CompanyMainEmail'].errors.required\">\n          Main Email is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Quote Email</label>\n        <input type=\"text\" class=\"form-control\"\n        formControlName=\"CompanyQuoteEmail\" \n        #CompanyQuoteEmail/>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Notify Email</label>\n        <input type=\"text\" class=\"form-control\"\n        formControlName=\"CompanyNotifyEmail\" \n        #CompanyNotifyEmail/>\n      </div>\n      \n      <div class=\"form-group\" *ngIf=\"!isEdit\">\n        <button (click)=\"save()\" type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"!angForm.touched\">\n              Create Customer\n        </button>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"isEdit\">\n          <button (click)=\"update()\" type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"\">\n              Update Customer\n          </button>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/company-get/company-get.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/company-get/company-get.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Customers</h2>\n\n<button routerLink=\"/company/create\" class=\"btn\">Create Customer</button>\n<button (click) = \"refresh()\" class=\"btn\">Refresh</button>\n\n<div class=\"row\">\n\n<div class=\"col-md-12 overflow-auto\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <td>Customer Name</td>\n                <td>Created on</td>\n                <td>Updated on</td>\n\n                <td colspan=\"2\">Actions</td>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr style=\"cursor: pointer\" (click)=\"rowSelected(company)\"\n                [class.bg-dark]=\"isRowSelected(company)\"\n                [class.text-white]=\"isRowSelected(company)\"*ngFor=\"let company of companies\">\n                <td>{{ company.companyName }}</td>\n                <td>{{ company.createdAt }}</td>\n                <td>{{ company.updatedAt }}</td>\n                <td><a [routerLink]=\"['/company/edit', company.id]\" class=\"btn text-primary\">Edit</a></td>\n                <td>\n                    <a [hidden]=\"company.showDeleteConfirmButton\" (click)=\"company.showDeleteConfirmButton = true\" class=\"btn text-primary\">Delete</a>\n                    <a [hidden]=\"!company.showDeleteConfirmButton\" (click)=\"deleteEntity(company)\" class=\"btn text-primary\">Confirm</a>\n                    <a [hidden]=\"!company.showDeleteConfirmButton\" (click)=\"company.showDeleteConfirmButton = false\" class=\"btn text-primary\">Cancel</a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dispatch-add/dispatch-add.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dispatch-add/dispatch-add.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <h2>Create Dispatch</h2>\n        <form [formGroup]=\"angForm\" novalidate>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Freight Payer</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"shipPayer\" #shipPayer/>\n            </div>\n            <div *ngIf=\"angForm.controls['shipPayer'].invalid && (angForm.controls['shipPayer'].dirty || angForm.controls['shipPayer'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['shipPayer'].errors.required\">\n                    shipPayer is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Pickup Ref:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"pickupRefId\" #pickupRefId/>\n            </div>\n            <div *ngIf=\"angForm.controls['pickupRefId'].invalid && (angForm.controls['pickupRefId'].dirty || angForm.controls['pickupRefId'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['pickupRefId'].errors.required\">\n                    Pickup Reference is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Docket Ref:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"docketId\" #docketId/>\n            </div>\n            <div *ngIf=\"angForm.controls['docketId'].invalid && (angForm.controls['docketId'].dirty || angForm.controls['docketId'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['docketId'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Order Ref:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"orderRefId\" #orderRefId/>\n            </div>\n            <div *ngIf=\"angForm.controls['orderRefId'].invalid && (angForm.controls['orderRefId'].dirty || angForm.controls['orderRefId'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['orderRefId'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Delivery Ref:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"deliveryRefId\" #deliveryRefId/>\n            </div>\n            <div *ngIf=\"angForm.controls['deliveryRefId'].invalid && (angForm.controls['deliveryRefId'].dirty || angForm.controls['deliveryRefId'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['deliveryRefId'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Export Cert No:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"exportCertNumber\" #exportCertNumber/>\n            </div>\n            <div *ngIf=\"angForm.controls['exportCertNumber'].invalid && (angForm.controls['exportCertNumber'].dirty || angForm.controls['exportCertNumber'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['exportCertNumber'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n            \n\n\n          jobType\n\n          isNoDisp\n\n          isQuote\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Shipper Name:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"shipperName\" #shipperName/>\n            </div>\n            <div *ngIf=\"angForm.controls['shipperName'].invalid && (angForm.controls['shipperName'].dirty || angForm.controls['shipperName'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['shipperName'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Shipper Address:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"shipperAddr\" #shipperAddr/>\n            </div>\n            <div *ngIf=\"angForm.controls['shipperAddr'].invalid && (angForm.controls['shipperAddr'].dirty || angForm.controls['shipperAddr'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['shipperAddr'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Consignee Name:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"consigneeName\" #consigneeName/>\n            </div>\n            <div *ngIf=\"angForm.controls['consigneeName'].invalid && (angForm.controls['consigneeName'].dirty || angForm.controls['consigneeName'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['consigneeName'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <span>\n                <label class=\"col-md-2\">Consignee Address:</label>\n                <div class=\"form-group\">\n                    <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"consigneeAddr1\" #consigneeAddr1/>\n                    <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"consigneeAddr2\" #consigneeAddr2/>\n                    <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"consigneeAddr3\" #consigneeAddr3/>\n                    <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"consigneeAddr4\" #consigneeAddr4/>\n                </div>\n            </span>\n\n            <div>\n                add section for GENERAL and NOTES AND COMMENTS\n            </div>\n\n          createdDate\n          status\n          \n          <div class=\"form-group\">\n                <label class=\"col-md-2\">Service Type:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"serviceType\" #serviceType/>\n            </div>\n            <div *ngIf=\"angForm.controls['serviceType'].invalid && (angForm.controls['serviceType'].dirty || angForm.controls['serviceType'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['serviceType'].errors.required\">\n                    Pickup docket id is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Pallets to Hire:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"hirePallets\" #hirePallets/>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Non Hire Pallets:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"nonHirePallets\" #nonHirePallets/>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Lifts:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"lifts\" #lifts/>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Hire Return:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"hireRetn\" #hireRetn/>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Goods Type:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"goodsType\" #goodsType/>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Required Temp:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"reqTempDeg\" #reqTempDeg/>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Actual Temp:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"actualTempDeg\" #actualTempDeg/>\n            </div>\n\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Unload Fee:</label>\n                <input class=\"form-control\" rows = 7 cols = \"5\" formControlName=\"unloadFee\" #unloadFee/>\n            </div>\n\n          noChg\n\n          noDisp\n\n          reqPickupDateTime\n\n          actPickupDateTime\n\n\n          reqDeliveryTime\n\n          actDeliveryTime\n\n\n\n          deliveredTo\n\n          hasPOD\n        \n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Comments:</label>\n                <textarea class=\"form-control\" rows = 7 cols = \"5\"\n                          formControlName=\"comments\" \n                          #comments></textarea>\n            </div>\n\n\n          nextDepot\n\n          deliveryDepot\n\n          currentDepot\n\n          <div class=\"form-group\">\n              <button (click) = \"addDispatch({\n                                    shipPayer: shipPayer.value, \n                                    pickupRefId: pickupRefId.value,\n                                    docketId: docketId.value,\n                                    orderRefId: orderRefId.value,\n                                    deliveryRefId: deliveryRefId.value,\n                                    exportCertNumber: exportCertNumber.value,\n\n                                    shipperName: shipperName.value,\n                                    shipperAddr: shipperAddr.value,\n                                    consigneeName: consigneeName.value,\n                                    consigneeAddr1: consigneeAddr1.value,\n                                    consigneeAddr2: consigneeAddr2.value,\n                                    consigneeAddr3: consigneeAddr3.value,\n                                    consigneeAddr4: consigneeAddr4.value,\n\n                                    serviceType: serviceType.value,\n                                    hirePallets: hirePallets.value,\n                                    nonHirePallets: nonHirePallets.value,\n                                    lifts: lifts.value,\n                                    hireRetn: hireRetn.value,\n                                    goodsType: goodsType.value,\n                                    reqTempDeg: reqTempDeg.value,\n                                    actualTempDeg: actualTempDeg.value,\n                                    unloadFee: unloadFee.value,\n\n                                    comments : comments.value\n                                    })\"\n                                    type=\"submit\" class=\"btn btn-primary\" [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Save and New\n              </button>\n          </div>\n            <div class=\"form-group\">\n                <button (click) = \"addDispatch({\n                                    shipPayer: shipPayer.value, \n                                    pickupRefId: pickupRefId.value,\n                                    docketId: docketId.value,\n                                    orderRefId: orderRefId.value,\n                                    deliveryRefId: deliveryRefId.value,\n                                    exportCertNumber: exportCertNumber.value,\n\n                                    shipperName: shipperName.value,\n                                    shipperAddr: shipperAddr.value,\n                                    consigneeName: consigneeName.value,\n                                    consigneeAddr1: consigneeAddr1.value,\n                                    consigneeAddr2: consigneeAddr2.value,\n                                    consigneeAddr3: consigneeAddr3.value,\n                                    consigneeAddr4: consigneeAddr4.value,\n\n                                    serviceType: serviceType.value,\n                                    hirePallets: hirePallets.value,\n                                    nonHirePallets: nonHirePallets.value,\n                                    lifts: lifts.value,\n                                    hireRetn: hireRetn.value,\n                                    goodsType: goodsType.value,\n                                    reqTempDeg: reqTempDeg.value,\n                                    actualTempDeg: actualTempDeg.value,\n                                    unloadFee: unloadFee.value,\n\n                                    comments : comments.value\n                                    }\n                                    )\" type=\"submit\" class=\"btn btn-primary\">\n                    Save Booking\n                </button>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dispatch-get/dispatch-get.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dispatch-get/dispatch-get.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button routerLink=\"/dispatch/create\" class=\"btn\">Create Job</button>-->\n<div class=\"row\">\n    <button [routerLink]=\"['/price-rule/']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n\n<h2>Dispatch Jobs</h2>\n\n<button routerLink=\"/dispatch/quote\" class=\"btn\">Create Quote</button>\n\n<button (click) = \"refreshJobs()\" class=\"btn\">Refresh</button>\n\n<div class=\"row\">\n\n<div class=\"col-md-9 overflow-auto\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <td>ICOS REF</td>\n                <td>Customer</td>\n                <td>Shipper Name</td>\n                <td>Consignee Name</td>\n                <td>Status</td>\n                <td>Deliver From</td>\n                <td>Deliver To</td>\n\n                <td colspan=\"2\">Actions</td>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr style=\"cursor: pointer\" (click)=\"rowSelected(job)\" [class.bg-dark]=\"isRowSelected(job)\" [class.text-white]=\"isRowSelected(job)\"*ngFor=\"let job of jobs\">\n                <td>{{ job.iCOSRef }}</td>\n                <td>{{ job.customer }}</td>\n                <td>{{ job.bookedBy }}</td>\n                <td>{{ job.deliver }}</td>\n                <td>{{ job.status }}</td>\n                <td>{{ job.from }}</td>\n                <td>{{ job.goingTo }}</td>\n                <td><a [routerLink]=\"['/edit', job._id]\" class=\"btn text-primary\">Edit</a></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n\n<div class=\"col-md-3\">\n<h3>Job Details</h3>\n    <div *ngFor=\"let job of selectedJobs\">\n\n        <hr>\n        <div class=\"card\">\n            <div class=\"card-body\">\n            <div class=\"row\">\n                <h5 class=\"float-left\" style=\"cursor: pointer\">ICOS REF: {{ job.iCOSRef }}</h5>\n                <div class=\"float-right\"><a [routerLink]=\"['dispatch/edit', job._id]\" class=\"btn text-primary\">Edit</a></div>\n            </div>\n                <div class=\"row\" style=\"cursor: pointer\">Status: {{ job.status }}</div>\n                <div class=\"row\" style=\"cursor: pointer\">Customer: {{ job.customer }}</div>\n                <div class=\"row\" style=\"cursor: pointer\">Booked By: {{ job.bookedBy }}</div>\n                <div class=\"row\" style=\"cursor: pointer\">Deliver: {{ job.deliver }}</div>\n                <div class=\"row\" style=\"cursor: pointer\">From: {{ job.from }}</div>\n                <div class=\"row\" style=\"cursor: pointer\">To: {{ job.goingTo }}</div>\n        </div>\n        </div>\n    </div>\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dispatch-quote-get/dispatch-quote-get.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dispatch-quote-get/dispatch-quote-get.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"row\">\n    <button [routerLink]=\"['/']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n-->\n\n<h2>Dispatch Quotes</h2>\n\n<button routerLink=\"/dispatch/quote/create\" class=\"btn\">Create Quote</button>\n\n<button (click) = \"refreshQuotes()\" class=\"btn\">Refresh</button>\n\n<div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <button class=\"btn btn-outline-dark dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Quote ID</button>\n        <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item\">Date</a>\n            <a class=\"dropdown-item\">Customer</a>\n            <a class=\"dropdown-item\">Tonne</a>\n            <a class=\"dropdown-item\">Volume</a>\n            <div role=\"separator\" class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\">Advanced Search</a>\n        </div>\n\n    </div>\n    <input (keydown.enter)=\"searchQuotes()\" [(ngModel)]=\"searchTerm\" type=\"text\" class=\"form-control\" id=\"searchInput\">\n\n    <div class=\"input-group-append\">\n        <button (click)=\"searchQuotes()\" class=\"btn btn-outline-dark\" type=\"button\">Search</button> \n    </div>\n</div>\n\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>Quote REF</td>\n      <td>Customer</td>\n      <td>Quoted On</td>\n      <td>Deliver From</td>\n      <td>Deliver To</td>\n      <td>Volume (m3)</td>\n      <td>Kg</td>\n      <td>Cost</td>\n\n      <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr style=\"cursor: pointer\" (click)=\"rowSelected(quote)\" [class.bg-dark]=\"isRowSelected(quote)\" [class.text-white]=\"isRowSelected(quote)\"*ngFor=\"let quote of quotes\">\n          <td>{{ quote.quoteId }}</td>\n          <td>{{ quote.companyName }}</td>\n          <td>{{ quote.createdAt }}</td>\n          <td>{{ quote.from }}</td>\n          <td>{{ quote.to }}</td>\n          <td>{{ quote.mass }}</td>\n          <td>{{ quote.weight }}</td>\n          <td>${{ quote.cost }}</td>\n          <td><a [routerLink]=\"['edit', quote.id]\" class=\"btn text-primary\">Edit</a></td>\n      </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dispatch-quote/dispatch-quote.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dispatch-quote/dispatch-quote.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"row ml-1 mt-1\">\n        <button [routerLink]=\"['/dispatch/quote']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n    </div>\n    <div class=\"card-body\">\n        <h2 [hidden]=\"!isEdit\">Edit Dispatch Quote</h2>\n        <h2 [hidden]=\"isEdit\">Create Dispatch Quote</h2>\n        <div class=\"row mr-1\">\n            <p [hidden]=\"!isEdit\" class=\"col-md-12\">ID: {{quoteId}}</p>\n        </div>\n        <form [formGroup]=\"angForm\" novalidate>\n            \n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">To</label>\n                <select class=\"form-control\" type=\"text\" class= \"form-control\" formControlName=\"to\" #to>\n                    <option *ngFor=\"let loc of locationOptions\" value=\"{{loc.value}}\">{{loc.userValue}}</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">From</label>\n                <select class=\"form-control\" type=\"text\" class=\"form-control\" formControlName=\"from\" #from>\n                    <option *ngFor=\"let loc of locationOptions\" value=\"{{loc.value}}\">{{loc.userValue}}</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Weight (kg)</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"weight\" #weight/>\n            </div>\n            <div *ngIf=\"angForm.controls['weight'].invalid && (angForm.controls['weight'].dirty || angForm.controls['weight'].touched)\" \n                class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['weight'].errors.required\">\n                    weight is required.\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label class=\"col-md-2\">Volume (m3)</label>\n                <input type=\"number\" class=\"form-control\" formControlName=\"mass\" #mass/>\n            </div>\n            <div *ngIf=\"angForm.controls['mass'].invalid && (angForm.controls['mass'].dirty || angForm.controls['mass'].touched)\" \n                class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['mass'].errors.required\">\n                    mass is required.\n                </div>\n            </div>\n\n            <div [hidden]=\"hideCommentField\" class=\"form-group\">\n                <label class=\"col-md-2\">Comment</label>\n                <textarea class=\"form-control\" formControlName=\"comment\" #comment></textarea>\n            </div>\n\n            <div class=\"form-group\">\n                <button \n                 [hidden]=\"true\"\n                (click) = \"getQuote({\n                                      to: to.selectedIndex,\n                                      from: from.selectedIndex,\n                                      weight: weight.value,\n                                      mass: mass.value,\n                                      comment: comment.value\n                                      })\"\n                 type=\"submit\" class=\"btn btn-primary\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                    Get Quote\n                </button>\n\n                <button (click) = \"saveQuote()\"\n                 type=\"submit\" class=\"btn btn-primary ml-1 float-right\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                    Save\n                </button>\n            </div>\n        </form>\n        \n        <h2>Quoted Amount ${{ cost }}</h2> \n        <div class=\"text-secondary\">\n        * Please note that the above quoted cost may not reflect the same cost as the invoice. This is due to other variable costs such as fuel adjustment fees, uplifts, driver related expenses, etc which may be excluded.\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dispatch-upload/dispatch-upload.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dispatch-upload/dispatch-upload.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button [routerLink]=\"['/price-rule/']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n\n<h2>Upload Job Export</h2>\n\n<div class=\"card\">\n    <div>\n        <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".xls, .xlsx, .pdf, .csv\" style=\"padding-left: 5px\">\n    </div>\n    <button (click) = \"upload()\" type=\"submit\" class=\"btn btn-primary\"> Upload Jobs</button>\n    <div *ngIf=\"showError\" class=\"alert alert-danger\">\n        <div *ngIf=\"showError\">\n            We have encountered an error with the file upload, please try again later\n        </div>\n    </div>\n    <div *ngIf=\"showSuccess\" class=\"alert alert-success\">\n        <div *ngIf=\"showSuccess\">\n            You have successfully uploaded the dispatch file\n        </div>\n    </div>\n\n    File Contents:\n    <br>\n    <div id=\"fileContent\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\" style=\"width: 30rem; margin-left: 45%; margin-top: 10%;\">\n        <div class=\"card-body\">\n            <form [formGroup]=\"angForm\" novalidate>\n                <div class=\"form-group\">\n                    <label class=\"col-md-4\">Username</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"username\" #username/>\n                </div>\n                <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"angForm.controls['username'].errors.required\">\n                        Username is required.\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label class=\"col-md-4\">Password</label>\n                    <input class=\"form-control\" rows = 7 cols = \"5\" type=\"password\"formControlName=\"password\" #password/>\n                </div>\n\n                <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"angForm.controls['password'].errors.required\">\n                        Password is required.\n                    </div>\n                </div>\n\n                <div *ngIf=\"showError\" class=\"alert alert-danger\">\n                    <div *ngIf=\"showError\">\n                        Invalid Username or Password\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <button (click) = \"login(username.value,  password.value)\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"angForm.pristine || angForm.invalid\" >\n                        Login\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/price-rule-add/manage-price-rule.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/price-rule-add/manage-price-rule.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n                <button [routerLink]=\"['/price-rule/']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <h2 [hidden]=\"isEdit\">Create Quote Price Rule</h2>\n                <h2 [hidden]=\"!isEdit\">Edit Quote Price Rule</h2>\n            </div>\n            <div class=\"col-6\">\n                <button (click)=\"addLocationConditional()\" class=\"btn btn-outline-dark\">Add Location Filter</button>\n                <button (click)=\"removeLocationConditionalByIdx(currentConditionalsIdx)\" class=\"btn btn-outline-dark\">Remove Location Filter</button>\n                <button (click)=\"savePriceRuleConfig()\" class=\"btn btn-outline-dark float-right\">Save</button>\n            </div>\n\n            <div class=\"col-12 my-2\">\n                <div class=\"row\">\n\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <label class=\"col-md-3\" [class.col-md-6]=\"isEdit\">Company: {{ isEdit ? config.companyName : '' }}</label>\n                            <select *ngIf=\"!isEdit\" class=\"form-control col-md-6\" [(ngModel)]=\"currentCompany\">\n                                <option *ngFor=\"let company of companyOptions\" [value]=\"company.value\">\n                                {{company.label}}\n                                </option>\n                            </select>\n                             \n                        </div>\n                    </div>\n\n                    <div class=\"col-6\">\n                        <div class=\"row\">\n                            <label class=\"col-md-4\">Location Filter: </label>\n                            <select class=\"form-control col-md-6\" (change)=\"setCurrentLocationConditionalIdx($event.target.value)\">\n                                <option *ngFor=\"let conditional of config.priceRuleLocationConditionals; let filterNo = index\" [value]=\"filterNo\">\n                                {{conditional.name + '-' + (filterNo+1)}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n\n        <div *ngIf=\"config.priceRuleLocationConditionals.length > 0\" class=\"card col-md-3 float-right\" style=\"max-height:75vh; overflow-y: scroll;\">\n            <div class=\"card-body\">\n                <h5>Select Locations</h5>\n                <tbody>\n                    <tr style=\"cursor: pointer\"\n                 (click)=\"toggleLocation(location)\"\n                 [class.bg-primary]=\"isLocationSelected(location)\"\n                 [class.text-white]=\"isLocationSelected(location) || isLocationAlreadySelectedByOtherConditional(location)\"\n\n                 [class.bg-secondary]=\"isLocationAlreadySelectedByOtherConditional(location)\"\n                 *ngFor=\"let location of locations\">\n                        {{location.userValue}}\n                    </tr>\n                </tbody>\n            </div>\n        </div>\n        \n        <div [class.col-md-12] =\"config.priceRuleLocationConditionals.length === 0\"\n            class=\"card col-md-9 float-left\">\n            <div class=\"card-body\">\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Quote Rules</h5>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <button *ngIf=\"config.priceRuleLocationConditionals.length === 0\" (click)=\"addRule()\"\n                            class=\"btn btn-outline-dark float-right\">Add Rule</button>\n                        <button *ngIf=\"config.priceRuleLocationConditionals.length > 0\" (click)=\"addRule(currentConditionalsIdx)\" class=\"btn btn-outline-dark float-right\">Add Rule</button>\n                    </div>\n                </div>\n\n                <div class=\"mt-3\">\n                    <div *ngIf=\"config.priceRuleLocationConditionals.length === 0\">\n                        <div *ngFor=\"let rule of config.priceRuleSet.priceRules; let ruleIndex = index\" class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row mb-2\">\n                                    <div class=\"ml-2\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\">\n                                        <b>Comparitor</b>\n                                    </div>\n                                    <div class=\"ml-2\" *ngIf=\"rule.type !== PRICE_RULE_TYPE.GET_GREATER_NEXT\">\n                                        <b>Step {{rule.stepNo}}</b>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <label class=\"float-left\">Type:</label>\n                                    <select class=\"form-control float-left\" [(ngModel)]=\"rule.type\" (change)=\"onRuleTypeSelectionChange($event.target.value)\">\n                                        <option *ngFor=\"let ruleType of priceRuleOptions\" [value]=\"ruleType.value\">\n                                        {{ruleType.label}}\n                                        </option>\n                                    </select>\n\n                                    <label *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-2\">Step A:</label>\n                                    <input type=\"number\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-1\" [(ngModel)]=\"rule.compareSteps.stepA\">\n\n                                    <label *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-2\">Step B:</label>\n                                    <input type=\"number\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-1\" [(ngModel)]=\"rule.compareSteps.stepB\">\n                                </div>\n\n                                <button (click)=\"removeRule(rule)\" class=\"btn btn-outline-dark float-right mt-1\">Remove</button>\n\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div *ngIf=\"config.priceRuleLocationConditionals.length > 0\">\n                        <div *ngFor=\"let rule of config.priceRuleLocationConditionals[currentConditionalsIdx].priceRuleSet.priceRules;\n                            let ruleIndex = index\" class=\"card\">\n                            <div class=\"card-body\">\n                                <div class=\"row mb-2\">\n                                    <div class=\"ml-2\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\">\n                                        <b>Comparitor</b>\n                                    </div>\n                                    <div class=\"ml-2\" *ngIf=\"rule.type !== PRICE_RULE_TYPE.GET_GREATER_NEXT\">\n                                        <b>Step {{rule.stepNo}}</b>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <label class=\"col-md-2\">Type:</label>\n                                    <select class=\"form-control col-md-4\" [(ngModel)]=\"rule.type\" (change)=\"onRuleTypeSelectionChange($event.target.value)\">\n                                        <option *ngFor=\"let ruleType of priceRuleOptions\" [value]=\"ruleType.value\">\n                                        {{ruleType.label}}\n                                        </option>\n                                    </select>\n\n                                    <label *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-2\">Step A:</label>\n                                    <input type=\"number\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-1\" [(ngModel)]=\"rule.compareSteps.stepA\">\n\n                                    <label *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-2\">Step B:</label>\n                                    <input type=\"number\" *ngIf=\"rule.type === PRICE_RULE_TYPE.GET_GREATER_NEXT\" class=\"col-md-1\" [(ngModel)]=\"rule.compareSteps.stepB\">\n                                </div>\n\n                                <button (click)=\"removeRule(rule)\" class=\"btn btn-outline-dark float-right mt-1\">Remove</button>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n\n        \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/price-rule-list/price-rule-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/price-rule-list/price-rule-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Price Rules</h2>\n\n<div class=\"row\">\n<div class=\"col-md-12 overflow-auto\">\n\n        <button [routerLink]=\"['/price-rule/manage']\" class=\"btn\">Create New</button>\n        <button (click) = \"refresh()\" class=\"btn\">Refresh</button>\n\n        <div class=\"row\">\n        </div>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <td>Id</td>\n                    <td>Customer Name</td>\n                    <td>Created on</td>\n                    <td>Updated on</td>\n                    <td colspan=\"2\">Actions</td>\n\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let config of priceRuleConfigs\">\n                    <td> {{ config.id }} </td>\n                    <td> {{ config.companyName }} </td>\n                    <td> {{ config.createdAt }} </td>\n                    <td> {{ config.updatedAt }} </td>\n                    <td>\n                        <a [routerLink]=\"['edit', config.id]\" class=\"btn text-primary\">Edit</a>\n                    </td>\n                    <td>\n                        <a [hidden]=\"config.showDeleteConfirmButton\" (click)=\"config.showDeleteConfirmButton = true\" class=\"btn text-primary\">Delete</a>\n                        <a [hidden]=\"!config.showDeleteConfirmButton\" (click)=\"deleteEntity(config)\" class=\"btn text-primary\">Confirm</a>\n                        <a [hidden]=\"!config.showDeleteConfirmButton\" (click)=\"config.showDeleteConfirmButton = false\" class=\"btn text-primary\">Cancel</a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-add/product-add.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-add/product-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Name</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"ProductName\" \n          #ProductName />\n      </div>\n      <div *ngIf=\"angForm.controls['ProductName'].invalid && (angForm.controls['ProductName'].dirty || angForm.controls['ProductName'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductName'].errors.required\">\n          Product Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Description </label>\n        <textarea class=\"form-control\" rows = 7 cols = \"5\"\n        formControlName=\"ProductDescription\" \n        #ProductDescription></textarea>\n      </div>\n      <div *ngIf=\"angForm.controls['ProductDescription'].invalid && (angForm.controls['ProductDescription'].dirty || angForm.controls['ProductDescription'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductDescription'].errors.required\">\n          Product Description is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Price</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"ProductPrice\" \n          #ProductPrice\n        />\n      </div>\n      <div *ngIf=\"angForm.controls['ProductPrice'].invalid && (angForm.controls['ProductPrice'].dirty || angForm.controls['ProductPrice'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductPrice'].errors.required\">\n          Product Price is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click) = \"addProduct(ProductName.value, ProductDescription.value, ProductPrice.value)\" type=\"submit\" class=\"btn btn-primary\"\n        [disabled]=\"angForm.pristine || angForm.invalid\" >\n          Create Product\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/product-edit/product-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-edit/product-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Name</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"ProductName\" \n          #ProductName \n          [(ngModel)] = \"product.ProductName\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['ProductName'].invalid && (angForm.controls['ProductName'].dirty || angForm.controls['ProductName'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductName'].errors.required\">\n          Product Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Description </label>\n        <textarea class=\"form-control\" rows = 7 cols = \"5\"\n        formControlName=\"ProductDescription\" \n        #ProductDescription [(ngModel)] = \"product.ProductDescription\"></textarea>\n      </div>\n      <div *ngIf=\"angForm.controls['ProductDescription'].invalid && (angForm.controls['ProductDescription'].dirty || angForm.controls['ProductDescription'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductDescription'].errors.required\">\n          Product Description is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Product Price</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"ProductPrice\" \n          #ProductPrice\n          [(ngModel)] = \"product.ProductPrice\"\n        />\n      </div>\n      <div *ngIf=\"angForm.controls['ProductPrice'].invalid && (angForm.controls['ProductPrice'].dirty || angForm.controls['ProductPrice'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['ProductPrice'].errors.required\">\n          Product Price is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click) = \"updateProduct(ProductName.value, ProductDescription.value, ProductPrice.value, 0)\" type=\"submit\" class=\"btn btn-primary\"\n        [disabled]=\"angForm.invalid\" >\n          Update Product\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rating-card-add/rating-card-add.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rating-card-add/rating-card-add.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <button [routerLink]=\"['/rating-card']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n\n<h2 *ngIf=\"!isEdit\">Create Rating Card</h2>\n<h2 *ngIf=\"isEdit\">Update Rating Card</h2>\n\n<div class=\"card col-md-3 float-left\" style=\"max-height:75vh; overflow-y: scroll;\">\n    <div class=\"card-body\">\n        <h5>Select Location</h5>\n        <tbody>\n            <tr\n         style=\"cursor: pointer\"\n         (click)=\"selectLocation(location)\"\n         [class.bg-primary]=\"location.isSelected\"\n         [class.text-white]=\"location.isSelected\"\n         *ngFor=\"let location of locations\">\n                {{location.userValue}}\n            </tr>\n        </tbody>\n    </div>\n</div>\n\n<div class=\"card col-md-9 float-right\">\n  <div class=\"card-body\">\n\n    <form [formGroup]=\"angForm\" novalidate>\n        <div class=\"form-group\">\n            <label class=\"float-left\"\n                   [class.col-md-6]=\"isEdit\"\n                   [class.col-md-2]=\"!isEdit\"\n                >Company{{isEdit ? ': '+ratingCard.companyName : ''}}</label>\n            <select [hidden]=\"isEdit\" \n                   class=\"form-control col-md-6 float-left\"\n                   formControlName=\"CompanyOption\"\n                   #CompanyOption>\n                <option *ngFor=\"let company of companyOptions\">\n                {{company.label}}\n                </option>\n          </select>\n      </div>\n\n      <div class=\"form-group float-right\" *ngIf=\"!isEdit\">\n          <button (click)=\"save(CompanyOption.selectedIndex)\" type=\"submit\" class=\"btn btn-primary float-right\">\n              Create Rating Card\n        </button>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"isEdit\">\n          <button (click)=\"update()\" type=\"submit\" class=\"btn btn-primary float-right\">\n              Update Rating Card\n          </button>\n      </div>\n\n    </form>\n  </div>\n\n</div>\n\n<div class=\"card col-md-9 float-right\">\n    <div class=\"card-body\">\n        <h5>{{selectedLocation ? selectedLocation.userValue : 'Location'}} Rates</h5>\n        <table *ngIf=\"maxRates\" class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <td>Tonne Rate</td>\n                    <td>Volume Rate (m3)</td>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr style=\"cursor: pointer\">\n                    <td>\n                        <input [(ngModel)]=\"maxRates.cost_p_tonne\" type=\"number\">\n                    </td>\n\n                    <td>\n                        <input [(ngModel)]=\"maxRates.cost_p_m3\" type=\"number\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <table *ngIf=\"minorPriceLevels\" class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <td>Tonne</td>\n                    <td>Volume (m3)</td>\n                    <td>Cost</td>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr\n                                        style=\"cursor: pointer\"\n                                        *ngFor=\"let majorLocation of minorPriceLevels\">\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.tonne\" type=\"number\">\n                    </td>\n\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.m3\" type=\"number\">\n                    </td>\n\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.cost\" type=\"number\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n        <table *ngIf=\"majorPriceLevels\" class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <td>Tonne</td>\n                    <td>Volume (m3)</td>\n                    <td>Cost</td>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr\n                                        style=\"cursor: pointer\"\n                                        *ngFor=\"let majorLocation of majorPriceLevels\">\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.tonne\" type=\"number\">\n                    </td>\n\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.m3\" type=\"number\">\n                    </td>\n\n                    <td>\n                        <input [(ngModel)]=\"majorLocation.cost\" type=\"number\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rating-card-get/rating-card-get.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rating-card-get/rating-card-get.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Rating Cards</h2>\n\n<button routerLink=\"/rating-card/create\" class=\"btn\">Create Rating Card</button>\n<button (click) = \"refresh()\" class=\"btn\">Refresh</button>\n\n<div class=\"row\">\n\n<div class=\"col-md-12 overflow-auto\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <td>Id</td>\n                <td>Customer Name</td>\n                <td>Created on</td>\n                <td>Updated on</td>\n\n                <td colspan=\"2\">Actions</td>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr\n                style=\"cursor: pointer\"\n                (click)=\"rowSelected(ratingCard)\"\n                [class.bg-dark]=\"isRowSelected(ratingCard)\"\n                [class.text-white]=\"isRowSelected(ratingCard)\"\n                *ngFor=\"let ratingCard of ratingCards\">\n                <td>{{ ratingCard ? ratingCard.cardData.id : '' }}</td>\n                <td>{{ ratingCard.companyName ? ratingCard.companyName : 'Default Card' }}</td>\n                <td>{{ ratingCard.cardData ? ratingCard.cardData.createdAt : '' }}</td>\n                <td>{{ ratingCard.cardData ? ratingCard.cardData.updatedAt : '' }}</td>\n                <td><a [routerLink]=\"['/rating-card/edit', ratingCard.cardData.id]\" class=\"btn text-primary\">Edit</a></td>\n                <td>\n                    <a [hidden]=\"ratingCard.showDeleteConfirmButton\" (click)=\"ratingCard.showDeleteConfirmButton = true\" class=\"btn text-primary\">Delete</a>\n                    <a [hidden]=\"!ratingCard.showDeleteConfirmButton\" (click)=\"deleteEntity(ratingCard)\" class=\"btn text-primary\">Confirm</a>\n                    <a [hidden]=\"!ratingCard.showDeleteConfirmButton\" (click)=\"ratingCard.showDeleteConfirmButton = false\" class=\"btn text-primary\">Cancel</a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-add/user-add.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-add/user-add.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <button [routerLink]=\"['/user']\" class=\"btn\"><h5 class=\"text-primary\">Back</h5></button>\n</div>\n\n<h2 *ngIf=\"!isEdit\">Create User</h2>\n<h2 *ngIf=\"isEdit\">Update User</h2>\n\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Username</label>\n        <input type=\"text\" class=\"form-control\" \n          formControlName=\"Username\" \n          #Username />\n      </div>\n      <div *ngIf=\"angForm.controls['Username'].invalid && (angForm.controls['Username'].dirty || angForm.controls['Username'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['Username'].errors.required\">\n          Username is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\" *ngIf=\"!isEdit\">Password</label>\n        <label class=\"col-md-4\" *ngIf=\"isEdit\">New Password</label>\n        <input type=\"text\" class=\"form-control\"\n        formControlName=\"Password\" \n        #Password/>\n      </div>\n      <div *ngIf=\"!isEdit && angForm.controls['Password'].invalid && (angForm.controls['Password'].dirty || angForm.controls['Password'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['Password'].errors.required\">\n          Password is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-md-2\">Company</label>\n          <select class=\"form-control\"\n              formControlName=\"CompanyOption\"\n              #CompanyOption>\n              <option *ngFor=\"let company of companyOptions\">{{company.label}}</option>\n          </select>\n      </div>\n      \n      <div class=\"form-group\" *ngIf=\"!isEdit\">\n        <button (click)=\"saveUser(Username.value, Password.value, CompanyOption.selectedIndex)\" type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"!angForm.touched\">\n              Create User\n        </button>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"isEdit\">\n          <button (click)=\"updateUser(Username.value, Password.value)\" type=\"submit\" class=\"btn btn-primary\"\n              [disabled]=\"\">\n              Update User\n          </button>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-get/user-get.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-get/user-get.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Users</h2>\n\n<button routerLink=\"/user/create\" class=\"btn\">Create User</button>\n<button (click) = \"refresh()\" class=\"btn\">Refresh</button>\n\n<div class=\"row\">\n\n<div class=\"col-md-12 overflow-auto\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <td>Username</td>\n                <td>Company</td>\n                <td>Created on</td>\n                <td>Updated on</td>\n\n                <td colspan=\"2\">Actions</td>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr style=\"cursor: pointer\" (click)=\"rowSelected(user)\"\n                [class.bg-dark]=\"isRowSelected(user)\"\n                [class.text-white]=\"isRowSelected(user)\"*ngFor=\"let user of users\">\n                <td>{{ user.username }}</td>\n                <td>{{ user.company.companyName }}</td>\n                <td>{{ user.createdAt }}</td>\n                <td>{{ user.updatedAt }}</td>\n                <td><a [routerLink]=\"['/user/edit', user.id]\" class=\"btn text-primary\">Edit</a></td>\n                <td>\n                    <a [hidden]=\"user.showDeleteConfirmButton\" (click)=\"user.showDeleteConfirmButton = true\" class=\"btn text-primary\">Delete</a>\n                    <a [hidden]=\"!user.showDeleteConfirmButton\" (click)=\"deleteUser(user)\" class=\"btn text-primary\">Confirm</a>\n                    <a [hidden]=\"!user.showDeleteConfirmButton\" (click)=\"user.showDeleteConfirmButton = false\" class=\"btn text-primary\">Cancel</a>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-feature-config.service.ts":
/*!***********************************************!*\
  !*** ./src/app/app-feature-config.service.ts ***!
  \***********************************************/
/*! exports provided: AppFeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFeatureService", function() { return AppFeatureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppFeatureService = /** @class */ (function () {
    function AppFeatureService() {
        this.EnabledFeature = {
            login: true,
            user: true,
            company: true,
            dispatch: false,
            quote: true,
            ratingCard: true,
            uploadDispatch: false,
            priceRule: true,
            logout: true
        };
    }
    AppFeatureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppFeatureService);
    return AppFeatureService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ROUTE_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_PATH", function() { return ROUTE_PATH; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dispatch_get_dispatch_get_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatch-get/dispatch-get.component */ "./src/app/dispatch-get/dispatch-get.component.ts");
/* harmony import */ var _dispatch_quote_get_dispatch_quote_get_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dispatch-quote-get/dispatch-quote-get.component */ "./src/app/dispatch-quote-get/dispatch-quote-get.component.ts");
/* harmony import */ var _dispatch_add_dispatch_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dispatch-add/dispatch-add.component */ "./src/app/dispatch-add/dispatch-add.component.ts");
/* harmony import */ var _dispatch_upload_dispatch_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dispatch-upload/dispatch-upload.component */ "./src/app/dispatch-upload/dispatch-upload.component.ts");
/* harmony import */ var _dispatch_quote_dispatch_quote_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dispatch-quote/dispatch-quote.component */ "./src/app/dispatch-quote/dispatch-quote.component.ts");
/* harmony import */ var _price_rule_add_manage_price_rule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price-rule-add/manage-price-rule.component */ "./src/app/price-rule-add/manage-price-rule.component.ts");
/* harmony import */ var _price_rule_list_price_rule_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price-rule-list/price-rule-list.component */ "./src/app/price-rule-list/price-rule-list.component.ts");
/* harmony import */ var _user_get_user_get_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-get/user-get.component */ "./src/app/user-get/user-get.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _company_get_company_get_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-get/company-get.component */ "./src/app/company-get/company-get.component.ts");
/* harmony import */ var _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./company-add/company-add.component */ "./src/app/company-add/company-add.component.ts");
/* harmony import */ var _rating_card_get_rating_card_get_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rating-card-get/rating-card-get.component */ "./src/app/rating-card-get/rating-card-get.component.ts");
/* harmony import */ var _rating_card_add_rating_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rating-card-add/rating-add.component */ "./src/app/rating-card-add/rating-add.component.ts");



















var routePath = {
    CREATE_DISPATCH: 'dispatch/create',
    EDIT_DISPATCH: 'dispatch/edit/:id',
    GET_DISPATCH: 'dispatch/',
    CREATE_DISPATCH_QUOTE: 'dispatch/quote/create',
    EDIT_DISPATCH_QUOTE: 'dispatch/quote/edit/:id',
    GET_DISPATCH_QUOTE: 'dispatch/quote/',
    CREATE_PRICE_RULE: 'price-rule/manage',
    EDIT_PRICE_RULE: 'price-rule/edit/:id',
    GET_PRICE_RULE: 'price-rule',
    GET_USER: 'user',
    CREATE_USER: 'user/create',
    EDIT_USER: 'user/edit/:id',
    GET_COMPANY: 'company',
    CREATE_COMPANY: 'company/create',
    EDIT_COMPANY: 'company/edit/:id',
    GET_RATING_CARD: 'rating-card',
    CREATE_RATING_CARD: 'rating-card/create',
    EDIT_RATING_CARD: 'rating-card/edit/:id',
    LOGIN: 'login'
};
var routes = [
    {
        path: 'product/create',
        component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_3__["ProductAddComponent"]
    },
    {
        path: 'edit/:id',
        component: _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProductEditComponent"]
    },
    {
        path: 'dispatch',
        component: _dispatch_get_dispatch_get_component__WEBPACK_IMPORTED_MODULE_6__["DispatchGetComponent"]
    },
    {
        path: 'dispatch/create',
        component: _dispatch_add_dispatch_add_component__WEBPACK_IMPORTED_MODULE_8__["DispatchAddComponent"]
    },
    {
        path: 'dispatch/quote/create',
        component: _dispatch_quote_dispatch_quote_component__WEBPACK_IMPORTED_MODULE_10__["DispatchQuoteComponent"]
    },
    {
        path: 'dispatch/quote/edit/:id',
        component: _dispatch_quote_dispatch_quote_component__WEBPACK_IMPORTED_MODULE_10__["DispatchQuoteComponent"]
    },
    {
        path: 'dispatch/quote',
        component: _dispatch_quote_get_dispatch_quote_get_component__WEBPACK_IMPORTED_MODULE_7__["DispatchQuoteGetComponent"]
    },
    {
        path: 'dispatch/upload',
        component: _dispatch_upload_dispatch_upload_component__WEBPACK_IMPORTED_MODULE_9__["DispatchUploadComponent"]
    },
    {
        path: routePath.CREATE_PRICE_RULE,
        component: _price_rule_add_manage_price_rule_component__WEBPACK_IMPORTED_MODULE_11__["ManagePriceRuleComponent"]
    },
    {
        path: routePath.EDIT_PRICE_RULE,
        component: _price_rule_add_manage_price_rule_component__WEBPACK_IMPORTED_MODULE_11__["ManagePriceRuleComponent"]
    },
    {
        path: routePath.GET_PRICE_RULE,
        component: _price_rule_list_price_rule_list_component__WEBPACK_IMPORTED_MODULE_12__["PriceRuleListComponent"]
    },
    {
        path: routePath.GET_USER,
        component: _user_get_user_get_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"]
    },
    {
        path: routePath.CREATE_USER,
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_14__["UserAddComponent"]
    },
    {
        path: routePath.EDIT_USER,
        component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_14__["UserAddComponent"]
    },
    {
        path: routePath.GET_COMPANY,
        component: _company_get_company_get_component__WEBPACK_IMPORTED_MODULE_15__["CompanyListComponent"]
    },
    {
        path: routePath.CREATE_COMPANY,
        component: _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_16__["CompanyAddComponent"]
    },
    {
        path: routePath.EDIT_COMPANY,
        component: _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_16__["CompanyAddComponent"]
    },
    {
        path: routePath.GET_RATING_CARD,
        component: _rating_card_get_rating_card_get_component__WEBPACK_IMPORTED_MODULE_17__["RatingCardListComponent"]
    },
    {
        path: routePath.CREATE_RATING_CARD,
        component: _rating_card_add_rating_add_component__WEBPACK_IMPORTED_MODULE_18__["RatingCardAddComponent"]
    },
    {
        path: routePath.EDIT_RATING_CARD,
        component: _rating_card_add_rating_add_component__WEBPACK_IMPORTED_MODULE_18__["RatingCardAddComponent"]
    },
    {
        path: routePath.LOGIN,
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var ROUTE_PATH = routePath;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _app_feature_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-feature-config.service */ "./src/app/app-feature-config.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, ls, FeatureService, storage) {
        var _this = this;
        this.router = router;
        this.ls = ls;
        this.FeatureService = FeatureService;
        this.storage = storage;
        this.title = 'Fr8Front';
        this.isLoggedIn = false;
        this.isRedir = false;
        this.altCompanyName = '';
        this.companyName = '';
        this.username = '';
        this.enabledFeature = {};
        this.enabledPermission = {};
        var userInfo = ls.getUserInfo();
        this.companyName = userInfo && userInfo.company ? userInfo.company.companyName : '';
        this.altCompanyName = this.companyName.toUpperCase();
        this.username = userInfo && userInfo.username ? userInfo.username : '';
        this.enabledFeature = FeatureService.EnabledFeature;
        this.enabledPermission = this.ls.getPermissions();
        this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        // console.log(this.isRedir, event);
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            if (!this.isLoggedIn && !this.isRedir) {
                this.isRedir = true;
                this.router.navigate(['login']);
            }
            else {
                this.isRedir = false;
            }
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this.isRedir = false;
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.isRedir = false;
        }
    };
    AppComponent.prototype.logout = function () {
        this.ls.logout();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ls.initToken()) {
            this.isLoggedIn = true;
        }
        this.companyName = this.ls.userInfo.company.companyName;
        this.altCompanyName = this.companyName.toUpperCase();
        this.username = this.ls.userInfo.username;
        this.enabledPermission = this.ls.getPermissions();
        this.ls.changedObj.subscribe(function (userInfo) {
            _this.companyName = _this.ls.userInfo.company.companyName;
            _this.altCompanyName = _this.companyName.toUpperCase();
            _this.username = _this.ls.userInfo.username;
            _this.enabledPermission = _this.ls.getPermissions();
        });
        this.ls.changed.subscribe(function (isLoggedIn) {
            console.log(isLoggedIn);
            _this.isLoggedIn = isLoggedIn;
            _this.companyName = '';
            _this.altCompanyName = '';
            _this.username = '';
            _this.enabledPermission = _this.ls.getPermissions();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _app_feature_config_service__WEBPACK_IMPORTED_MODULE_4__["AppFeatureService"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-edit/product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dispatch_get_dispatch_get_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dispatch-get/dispatch-get.component */ "./src/app/dispatch-get/dispatch-get.component.ts");
/* harmony import */ var _dispatch_add_dispatch_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dispatch-add/dispatch-add.component */ "./src/app/dispatch-add/dispatch-add.component.ts");
/* harmony import */ var _dispatch_upload_dispatch_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dispatch-upload/dispatch-upload.component */ "./src/app/dispatch-upload/dispatch-upload.component.ts");
/* harmony import */ var _dispatch_quote_dispatch_quote_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dispatch-quote/dispatch-quote.component */ "./src/app/dispatch-quote/dispatch-quote.component.ts");
/* harmony import */ var _dispatch_quote_get_dispatch_quote_get_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dispatch-quote-get/dispatch-quote-get.component */ "./src/app/dispatch-quote-get/dispatch-quote-get.component.ts");
/* harmony import */ var _rating_card_get_rating_card_get_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rating-card-get/rating-card-get.component */ "./src/app/rating-card-get/rating-card-get.component.ts");
/* harmony import */ var _rating_card_add_rating_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rating-card-add/rating-add.component */ "./src/app/rating-card-add/rating-add.component.ts");
/* harmony import */ var _price_rule_add_manage_price_rule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./price-rule-add/manage-price-rule.component */ "./src/app/price-rule-add/manage-price-rule.component.ts");
/* harmony import */ var _price_rule_list_price_rule_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./price-rule-list/price-rule-list.component */ "./src/app/price-rule-list/price-rule-list.component.ts");
/* harmony import */ var _user_get_user_get_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-get/user-get.component */ "./src/app/user-get/user-get.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/user-add/user-add.component.ts");
/* harmony import */ var _company_get_company_get_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./company-get/company-get.component */ "./src/app/company-get/company-get.component.ts");
/* harmony import */ var _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./company-add/company-add.component */ "./src/app/company-add/company-add.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dispatch_quote_dispatch_quote_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dispatch-quote/dispatch-quote.service */ "./src/app/dispatch-quote/dispatch-quote.service.ts");
/* harmony import */ var _dispatch_quote_quote_price_level_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dispatch-quote/quote-price-level.service */ "./src/app/dispatch-quote/quote-price-level.service.ts");
/* harmony import */ var _dispatch_quote_quote_interface__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dispatch-quote/quote-interface */ "./src/app/dispatch-quote/quote-interface.ts");
/* harmony import */ var _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dispatch-quote/quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");
/* harmony import */ var _dispatch_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.service */ "./src/app/dispatch.service.ts");
/* harmony import */ var _dispatch_gateway__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dispatch.gateway */ "./src/app/dispatch.gateway.ts");
/* harmony import */ var _dispatch_uploader_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dispatch-uploader.service */ "./src/app/dispatch-uploader.service.ts");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _app_feature_config_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./app-feature-config.service */ "./src/app/app-feature-config.service.ts");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var _rating_card_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./rating-card.service */ "./src/app/rating-card.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./location.service */ "./src/app/location.service.ts");











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_8__["NotyfToastFail"],
                _notify_success_toastr__WEBPACK_IMPORTED_MODULE_7__["NotyfToastSuccess"],
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__["ProductAddComponent"],
                _dispatch_get_dispatch_get_component__WEBPACK_IMPORTED_MODULE_14__["DispatchGetComponent"],
                _product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_10__["ProductEditComponent"],
                _dispatch_add_dispatch_add_component__WEBPACK_IMPORTED_MODULE_15__["DispatchAddComponent"],
                _dispatch_upload_dispatch_upload_component__WEBPACK_IMPORTED_MODULE_16__["DispatchUploadComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _price_rule_add_manage_price_rule_component__WEBPACK_IMPORTED_MODULE_21__["ManagePriceRuleComponent"],
                _price_rule_list_price_rule_list_component__WEBPACK_IMPORTED_MODULE_22__["PriceRuleListComponent"],
                _dispatch_quote_dispatch_quote_component__WEBPACK_IMPORTED_MODULE_17__["DispatchQuoteComponent"],
                _dispatch_quote_get_dispatch_quote_get_component__WEBPACK_IMPORTED_MODULE_18__["DispatchQuoteGetComponent"],
                _user_get_user_get_component__WEBPACK_IMPORTED_MODULE_23__["UserListComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_24__["UserAddComponent"],
                _company_get_company_get_component__WEBPACK_IMPORTED_MODULE_25__["CompanyListComponent"],
                _company_add_company_add_component__WEBPACK_IMPORTED_MODULE_26__["CompanyAddComponent"],
                _rating_card_get_rating_card_get_component__WEBPACK_IMPORTED_MODULE_19__["RatingCardListComponent"],
                _rating_card_add_rating_add_component__WEBPACK_IMPORTED_MODULE_20__["RatingCardAddComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"]
            ],
            providers: [
                _location_service__WEBPACK_IMPORTED_MODULE_41__["LocationService"],
                _rating_card_service__WEBPACK_IMPORTED_MODULE_40__["RatingCardService"],
                _app_feature_config_service__WEBPACK_IMPORTED_MODULE_38__["AppFeatureService"],
                _dispatch_quote_dispatch_quote_service__WEBPACK_IMPORTED_MODULE_28__["DispatchQuoteService"],
                _dispatch_quote_quote_price_level_service__WEBPACK_IMPORTED_MODULE_29__["QuotePriceLevelService"],
                _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_31__["QuoteConfig"],
                _dispatch_quote_quote_interface__WEBPACK_IMPORTED_MODULE_30__["QuoteInterface"],
                _dispatch_uploader_service__WEBPACK_IMPORTED_MODULE_34__["DispatchUploader"],
                _dispatch_service__WEBPACK_IMPORTED_MODULE_32__["DispatchService"],
                _dispatch_gateway__WEBPACK_IMPORTED_MODULE_33__["DispatchGateway"],
                _dispatch_provider__WEBPACK_IMPORTED_MODULE_35__["DispatchProvider"],
                _auth_provider__WEBPACK_IMPORTED_MODULE_39__["AuthProvider"],
                _login_service__WEBPACK_IMPORTED_MODULE_36__["LoginService"],
                _storage_service__WEBPACK_IMPORTED_MODULE_37__["StorageService"]
            ],
            entryComponents: [
                _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_8__["NotyfToastFail"],
                _notify_success_toastr__WEBPACK_IMPORTED_MODULE_7__["NotyfToastSuccess"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.gateway.ts":
/*!*********************************!*\
  !*** ./src/app/auth.gateway.ts ***!
  \*********************************/
/*! exports provided: AuthGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGateway", function() { return AuthGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_5__);







var AuthGateway = /** @class */ (function () {
    function AuthGateway(http, ls) {
        this.http = http;
        this.uriCompany = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/company' : 'http://localhost/company';
        this.uriAuth = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/auth' : 'http://localhost/auth';
        this.uriUser = this.uriCompany + '/user';
        this.ls = ls;
    }
    AuthGateway.prototype.getUserUri = function (id) {
        return this.uriCompany + "/" + id + "/user";
    };
    AuthGateway.prototype.setHeaders = function () {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: this.ls.getToken()
            })
        };
    };
    AuthGateway.prototype.deleteUser = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.delete(this.uriUser + "/" + id, this.httpOptions)
                    .toPromise().then(function (hres) {
                    console.log('Done Deleting Company User', hres);
                    return hres;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.deleteCompany = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.delete(this.uriCompany + "/" + id, this.httpOptions)
                    .toPromise().then(function (hres) {
                    console.log('Done Deleting Company', hres);
                    return hres;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.getCompanyUser = function (id, companyId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.get("" + this.getUserUri(companyId) + id, this.httpOptions)
                    .toPromise().then(function (hres) {
                    console.log('Done Creating Company User', hres);
                    return hres;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.getAllCompanyUsers = function (companyId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.get(this.getUserUri(companyId), this.httpOptions)
                    .toPromise().then(function (raw) {
                    console.log('Done Getting Company Users', raw);
                    var res = raw;
                    return res.companies;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.getCompany = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.get("" + this.uriAuth, this.httpOptions)
                    .toPromise().then(function (hres) {
                    console.log('Done Getting Company', hres);
                    return hres;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.getAllCompanies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                promise = this.http.get("" + this.uriCompany, this.httpOptions)
                    .toPromise().then(function (hres) {
                    console.log('Done Getting Companies', hres);
                    var res = hres;
                    return res.companies;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.updateCompany = function (companyId, company) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["UpdateCompanyRequest"](company);
                promise = this.http.put(this.uriCompany + "/" + companyId, req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Updating Company', res);
                    return res && res.company ? res.company : null;
                }, function (err) {
                    console.log('Err', err);
                    return null;
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.saveCompany = function (name, mainEmail, quoteEmail, notifyEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["SaveCompanyRequest"](name, mainEmail, quoteEmail, notifyEmail);
                promise = this.http.post("" + this.uriCompany, req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Creating Company', res);
                    return res && res.company ? res.company : null;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.postUser = function (username, password, companyId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["SaveUserRequest"](username, password, companyId);
                promise = this.http.post(this.uriAuth + "/register", req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Creating User', res);
                    return res && res.user ? res.user : null;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.updateUser = function (userId, user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["UpdateUserRequest"](user);
                promise = this.http.put(this.uriUser + "/" + userId, req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Updating User', res);
                    return res && res.user ? res.user : null;
                }, function (err) {
                    console.log('Err', err);
                    return null;
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.resetUserPassword = function (userId, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordRequest"](userId, password);
                promise = this.http.post(this.uriAuth + "/reset", req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Reseting password User', res);
                    return res && res.user ? res.user : null;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway.prototype.postCompany = function (companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req, promise;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["SaveCompanyRequest"](companyName, companyMainEmail, companyNotifyEmail, companyQuoteEmail);
                promise = this.http.post("" + this.uriCompany, req, this.httpOptions)
                    .toPromise().then(function (raw) {
                    var res = raw;
                    console.log('Done Creating Company', res);
                    return res && res.company ? res.company : null;
                }, function (err) {
                    console.log('Err', err);
                });
                return [2 /*return*/, promise];
            });
        });
    };
    AuthGateway = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], AuthGateway);
    return AuthGateway;
}());



/***/ }),

/***/ "./src/app/auth.provider.ts":
/*!**********************************!*\
  !*** ./src/app/auth.provider.ts ***!
  \**********************************/
/*! exports provided: AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthProvider = /** @class */ (function () {
    function AuthProvider(loginService, authService) {
        this.loginService = loginService;
        this.authService = authService;
    }
    AuthProvider.prototype.login = function (username, password) {
        return this.loginService.login(username, password);
    };
    AuthProvider.prototype.logout = function () {
        this.loginService.logout();
    };
    AuthProvider.prototype.listCompanies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.listCompanies()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.getCompanies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.getCompanies()];
            });
        });
    };
    AuthProvider.prototype.getCompanyOptions = function () {
        return this.authService.getCompanyOptions();
    };
    AuthProvider.prototype.getCompany = function (id) {
        return this.authService.getCompany(id);
    };
    AuthProvider.prototype.saveCompany = function (name, mainEmail, quoteEmail, notifyEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.saveCompany(name, mainEmail, quoteEmail, notifyEmail)];
            });
        });
    };
    AuthProvider.prototype.updateCompany = function (company) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.updateCompanyWithModel(company)];
            });
        });
    };
    AuthProvider.prototype.removeCompany = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.deleteCompany(id)];
            });
        });
    };
    AuthProvider.prototype.listUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.listUsers()];
            });
        });
    };
    AuthProvider.prototype.getMyUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.getUsers()];
            });
        });
    };
    AuthProvider.prototype.getCompanyUsers = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, []];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.getUser = function (id) {
        return this.authService.getUser(id);
    };
    AuthProvider.prototype.saveUser = function (userId, username, password, companyId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.addUser(userId, username, password, companyId)];
            });
        });
    };
    AuthProvider.prototype.updateUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.updateUserWithModel(user)];
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (userId, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.resetUserPassword(userId, password)];
            });
        });
    };
    AuthProvider.prototype.removeUser = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.authService.deleteUser(id)];
            });
        });
    };
    AuthProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthProvider);
    return AuthProvider;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.gateway */ "./src/app/auth.gateway.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(http, ag, ls) {
        this.http = http;
        this.ag = ag;
        this.ls = ls;
    }
    AuthService.prototype.addUser = function (userId, username, password, companyId) {
        return this.saveUser(username, password, companyId);
    };
    // Gateway func
    // Company
    AuthService.prototype.listCompanies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.ag.getAllCompanies().then(function (companies) {
                        _this.companies = companies;
                    })];
            });
        });
    };
    AuthService.prototype.getCompanies = function () {
        return this.companies;
    };
    AuthService.prototype.getCompanyOptions = function () {
        return this.companies.map(function (company) {
            return {
                label: company.companyName,
                value: company.id
            };
        });
    };
    AuthService.prototype.getCompany = function (id) {
        var companyList = this.companies.filter(function (company) {
            return company.id === id;
        });
        return companyList.length > 0 ? companyList[0] : null;
    };
    AuthService.prototype.saveCompany = function (name, mainEmail, quoteEmail, notifyEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.ag.saveCompany(name, mainEmail, quoteEmail, notifyEmail)];
            });
        });
    };
    AuthService.prototype.updateCompanyWithModel = function (company) {
        var companyId = company.id;
        return this.ag.updateCompany(companyId, company);
    };
    AuthService.prototype.deleteCompany = function (id) {
        var _this = this;
        return this.ag.deleteCompany(id)
            .then(function () {
            _this.companies = _this.companies.filter(function (company) {
                return company.id !== id;
            });
        });
    };
    // Users
    AuthService.prototype.saveUser = function (username, password, companyId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.ag.postUser(username, password, companyId)];
            });
        });
    };
    AuthService.prototype.getUsers = function () {
        return this.usersExt;
    };
    AuthService.prototype.getUser = function (id) {
        return this.usersExt ? this.usersExt.filter(function (user) {
            return user.id === id;
        })[0] : null;
    };
    AuthService.prototype.listUsers = function () {
        var _this = this;
        return this.ag.getAllCompanyUsers(this.ls.getUserCompanyId())
            .then(function (records) {
            _this.companiesExt = records;
            _this.usersExt = _this.extendUserObjList(records);
        });
    };
    AuthService.prototype.updateUserWithModel = function (user) {
        var userId = user.id;
        return this.ag.updateUser(userId, user);
    };
    AuthService.prototype.resetUserPassword = function (userId, password) {
        return this.ag.resetUserPassword(userId, password);
    };
    AuthService.prototype.deleteUser = function (id) {
        var _this = this;
        return this.ag.deleteUser(id)
            .then(function () {
            _this.usersExt = _this.usersExt.filter(function (user) {
                return user.id !== id;
            });
        });
    };
    // Helper func
    AuthService.prototype.extendUserObjList = function (companyExtList) {
        var resList = [];
        companyExtList.forEach(function (company) {
            var companyCopy = JSON.parse(JSON.stringify(company));
            console.log(companyCopy);
            var userList = JSON.parse(JSON.stringify(company.users));
            userList.forEach(function (user) {
                user.company = company;
                resList.push(user);
            });
        });
        return resList;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_gateway__WEBPACK_IMPORTED_MODULE_3__["AuthGateway"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/company-add/company-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/company-add/company-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktYWRkL2NvbXBhbnktYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company-add/company-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/company-add/company-add.component.ts ***!
  \******************************************************/
/*! exports provided: CompanyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAddComponent", function() { return CompanyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component-helper */ "./src/app/component-helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");










var CompanyAddComponent = /** @class */ (function () {
    function CompanyAddComponent(fb, router, ap, toastr) {
        this.fb = fb;
        this.router = router;
        this.ap = ap;
        this.toastr = toastr;
        this.isEdit = false;
        this.isEdit = _component_helper__WEBPACK_IMPORTED_MODULE_6__["ComponentHelper"].isEditView(router);
        this.dbId = _component_helper__WEBPACK_IMPORTED_MODULE_6__["ComponentHelper"].getId(this.isEdit, router);
        this.company = this.dbId ? ap.getCompany(this.dbId) : new fr8models__WEBPACK_IMPORTED_MODULE_5__["Company"]();
        this.createForm(this.company);
    }
    CompanyAddComponent.prototype.createForm = function (entity) {
        this.angForm = this.fb.group({
            CompanyName: [entity.companyName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            CompanyMainEmail: [entity.companyMainEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            CompanyQuoteEmail: [entity.companyQuoteEmail],
            CompanyNotifyEmail: [entity.companyNotifyEmail]
        });
    };
    CompanyAddComponent.prototype.update = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var raw, updateUserPromise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                raw = this.angForm.getRawValue();
                console.log('Edit:', raw);
                this.company.companyName = raw.CompanyName;
                this.company.companyMainEmail = raw.CompanyMainEmail;
                this.company.companyQuoteEmail = raw.CompanyQuoteEmail;
                this.company.companyNotifyEmail = raw.CompanyNotifyEmail;
                updateUserPromise = this.ap.updateCompany(this.company).then(function (res) {
                    _this.onSave(res, 'Updated Company ' + _this.company.companyName, 'Failed to Update Company ' + _this.company.companyName, ['company']);
                }).catch(function (err) {
                    _this.onSave(null, 'Updated User ' + _this.company.companyName, 'Failed to Update User ' + _this.company.companyName, ['company']);
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    CompanyAddComponent.prototype.save = function () {
        var _this = this;
        var raw = this.angForm.getRawValue();
        this.ap.saveCompany(raw.CompanyName, raw.CompanyMainEmail, raw.CompanyQuoteEmail, raw.CompanyNotifyEmail)
            .then(function (res) {
            _this.onSave(res, 'Saved Company ' + name, 'Failed to Save Company ' + name, ['company']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    CompanyAddComponent.prototype.onSave = function (res, successMessage, failMessage, redirUri) {
        console.log('onSaveObj', res);
        successMessage = successMessage ? successMessage : 'Saved Company';
        failMessage = failMessage ? failMessage : 'Failed to Save Company';
        var opt = JSON.parse(JSON.stringify(this.toastr.toastrConfig));
        opt.positionClass = 'toast-bottom-right';
        opt.toastClass = 'notyf confirm';
        if (res) {
            opt.toastComponent = _notify_success_toastr__WEBPACK_IMPORTED_MODULE_8__["NotyfToastSuccess"];
            this.toastr.success(successMessage, '', opt);
            if (redirUri) {
                this.router.navigate(redirUri);
            }
        }
        else {
            opt.toastComponent = _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_9__["NotyfToastFail"];
            this.toastr.error(failMessage, '', opt);
        }
    };
    CompanyAddComponent.prototype.ngOnInit = function () {
    };
    CompanyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-add',
            template: __webpack_require__(/*! raw-loader!./company-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/company-add/company-add.component.html"),
            styles: [__webpack_require__(/*! ./company-add.component.css */ "./src/app/company-add/company-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_provider__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], CompanyAddComponent);
    return CompanyAddComponent;
}());



/***/ }),

/***/ "./src/app/company-get/company-get.component.css":
/*!*******************************************************!*\
  !*** ./src/app/company-get/company-get.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnktZ2V0L2NvbXBhbnktZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/company-get/company-get.component.ts":
/*!******************************************************!*\
  !*** ./src/app/company-get/company-get.component.ts ***!
  \******************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(authProvider) {
        this.authProvider = authProvider;
    }
    CompanyListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    CompanyListComponent.prototype.refresh = function () {
        var _this = this;
        this.companies = [];
        this.selectedCompanies = [];
        this.authProvider.listCompanies()
            .then(function () { return _this.authProvider.getCompanies(); })
            .then(function (companies) {
            _this.companies = companies;
        });
    };
    CompanyListComponent.prototype.rowSelected = function (company) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.selectedCompanies, company)) {
            this.selectedCompanies.push(company);
        }
        else {
            this.selectedCompanies = this.selectedCompanies.filter(function (compare) {
                return compare !== fr8models__WEBPACK_IMPORTED_MODULE_2__["Company"];
            });
        }
    };
    CompanyListComponent.prototype.isRowSelected = function (selected) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.selectedCompanies, selected);
    };
    CompanyListComponent.prototype.deleteEntity = function (company) {
        var _this = this;
        this.authProvider.removeCompany(company.id)
            .then(function () { return _this.authProvider.getCompanies(); })
            .then(function (companies) {
            _this.companies = companies;
        });
    };
    CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-get',
            template: __webpack_require__(/*! raw-loader!./company-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/company-get/company-get.component.html"),
            styles: [__webpack_require__(/*! ./company-get.component.css */ "./src/app/company-get/company-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_provider__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/component-helper.ts":
/*!*************************************!*\
  !*** ./src/app/component-helper.ts ***!
  \*************************************/
/*! exports provided: ComponentHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHelper", function() { return ComponentHelper; });
var ComponentHelper = /** @class */ (function () {
    function ComponentHelper() {
    }
    /**
     * Since the angular select form only returns
     * label as value of selected, use this reverse lookup
     * to get the value of the selected option
     */
    ComponentHelper.reverseLookUpSelectedDropdownValue = function (selectedIndex, options) {
        return options && options.length - 1 >= selectedIndex ? options[selectedIndex] : null;
    };
    ComponentHelper.getId = function (isEdit, router) {
        if (isEdit) {
            var urlBits = router.url.split('/');
            return parseInt(urlBits[urlBits.length - 1], 10);
        }
        else {
            return null;
        }
    };
    ComponentHelper.isEditView = function (router) {
        return router.url.indexOf('edit') > -1;
    };
    return ComponentHelper;
}());



/***/ }),

/***/ "./src/app/dispatch-add/dispatch-add.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dispatch-add/dispatch-add.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BhdGNoLWFkZC9kaXNwYXRjaC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dispatch-add/dispatch-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dispatch-add/dispatch-add.component.ts ***!
  \********************************************************/
/*! exports provided: DispatchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchAddComponent", function() { return DispatchAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");






var DispatchAddComponent = /** @class */ (function () {
    function DispatchAddComponent(fb, router, dispatchProvider) {
        this.fb = fb;
        this.router = router;
        this.dispatchProvider = dispatchProvider;
        this.createForm();
    }
    DispatchAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            shipPayer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            flags: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            jobType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            docketId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orderRefId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            deliveryRefId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pickupRefId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            exportCertNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isNoDisp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            isQuote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shipperName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shipperAddr: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            consigneeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            consigneeAddr1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            consigneeAddr2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            consigneeAddr3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            consigneeAddr4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            createdDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            serviceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hirePallets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nonHirePallets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lifts: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hireRetn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            goodsType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reqTempDeg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            actualTempDeg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            unloadFee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noChg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noDisp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reqPickupDateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            actPickupDateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reqDeliveryTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            actDeliveryTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            deliveredTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hasPOD: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comments: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nextDepot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            deliveryDepot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            currentDepot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    DispatchAddComponent.prototype.addDispatch = function (args) {
        var _this = this;
        var newDispatch = new fr8models__WEBPACK_IMPORTED_MODULE_4__["DispatchRecord"](args);
        this.dispatchProvider.addDispatch(newDispatch)
            .then(function () {
            _this.router.navigate(['products']);
        }).catch(function (e) {
        });
    };
    DispatchAddComponent.prototype.addDispatchAndNew = function (args) {
        var newDispatch = new fr8models__WEBPACK_IMPORTED_MODULE_4__["DispatchRecord"](args);
        this.dispatchProvider.addDispatch(newDispatch);
    };
    DispatchAddComponent.prototype.ngOnInit = function () {
    };
    DispatchAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispatch-add',
            template: __webpack_require__(/*! raw-loader!./dispatch-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/dispatch-add/dispatch-add.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-add.component.css */ "./src/app/dispatch-add/dispatch-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _dispatch_provider__WEBPACK_IMPORTED_MODULE_5__["DispatchProvider"]])
    ], DispatchAddComponent);
    return DispatchAddComponent;
}());



/***/ }),

/***/ "./src/app/dispatch-get/dispatch-get.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dispatch-get/dispatch-get.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BhdGNoLWdldC9kaXNwYXRjaC1nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dispatch-get/dispatch-get.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dispatch-get/dispatch-get.component.ts ***!
  \********************************************************/
/*! exports provided: DispatchGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchGetComponent", function() { return DispatchGetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var DispatchGetComponent = /** @class */ (function () {
    function DispatchGetComponent(dispatchProvider) {
        this.dispatchProvider = dispatchProvider;
    }
    DispatchGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobs = [];
        this.dispatchProvider.listDispatch()
            .then(function () {
            _this.jobs = _this.dispatchProvider.getLocalDispatch();
        });
        this.selectedJobs = [];
    };
    DispatchGetComponent.prototype.refreshJobs = function () {
        this.dispatchProvider.listDispatch();
    };
    DispatchGetComponent.prototype.rowSelected = function (job) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedJobs, job)) {
            this.selectedJobs.push(job);
        }
        else {
            this.selectedJobs = this.selectedJobs.filter(function (compareJob) {
                return compareJob !== job;
            });
        }
        console.log(this.selectedJobs);
    };
    DispatchGetComponent.prototype.isRowSelected = function (job) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedJobs, job);
    };
    DispatchGetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispatch-get',
            template: __webpack_require__(/*! raw-loader!./dispatch-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/dispatch-get/dispatch-get.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-get.component.css */ "./src/app/dispatch-get/dispatch-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_provider__WEBPACK_IMPORTED_MODULE_2__["DispatchProvider"]])
    ], DispatchGetComponent);
    return DispatchGetComponent;
}());



/***/ }),

/***/ "./src/app/dispatch-quote-get/dispatch-quote-get.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dispatch-quote-get/dispatch-quote-get.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BhdGNoLXF1b3RlLWdldC9kaXNwYXRjaC1xdW90ZS1nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dispatch-quote-get/dispatch-quote-get.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dispatch-quote-get/dispatch-quote-get.component.ts ***!
  \********************************************************************/
/*! exports provided: DispatchQuoteGetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchQuoteGetComponent", function() { return DispatchQuoteGetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var DispatchQuoteGetComponent = /** @class */ (function () {
    function DispatchQuoteGetComponent(dispatchProvider) {
        this.dispatchProvider = dispatchProvider;
        this.searchTerm = '';
    }
    DispatchQuoteGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quotes = [];
        this.dispatchProvider.listQuotes()
            .then(function () {
            _this.quotes = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.dispatchProvider.getQuotes(), function (q) { return new Date(q.createdAt); }).reverse();
        });
        this.selectedQuotes = [];
    };
    DispatchQuoteGetComponent.prototype.refreshQuotes = function () {
        var _this = this;
        this.dispatchProvider.listQuotes()
            .then(function () {
            _this.quotes = lodash__WEBPACK_IMPORTED_MODULE_3__["sortBy"](_this.dispatchProvider.getQuotes(), function (q) { return new Date(q.createdAt); }).reverse();
        });
    };
    DispatchQuoteGetComponent.prototype.rowSelected = function (quote) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedQuotes, quote)) {
            this.selectedQuotes.push(quote);
        }
        else {
            this.selectedQuotes = this.selectedQuotes.filter(function (compareJob) {
                return compareJob !== quote;
            });
        }
        console.log(this.selectedQuotes);
    };
    DispatchQuoteGetComponent.prototype.isRowSelected = function (quote) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedQuotes, quote);
    };
    DispatchQuoteGetComponent.prototype.searchQuotes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchProvider.searchQuotes(this.searchTerm)];
                    case 1:
                        _a.sent();
                        this.quotes = this.dispatchProvider.getQuotes();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchQuoteGetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispatch-quote-get',
            template: __webpack_require__(/*! raw-loader!./dispatch-quote-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/dispatch-quote-get/dispatch-quote-get.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-quote-get.component.css */ "./src/app/dispatch-quote-get/dispatch-quote-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_provider__WEBPACK_IMPORTED_MODULE_2__["DispatchProvider"]])
    ], DispatchQuoteGetComponent);
    return DispatchQuoteGetComponent;
}());



/***/ }),

/***/ "./src/app/dispatch-quote.gateway.ts":
/*!*******************************************!*\
  !*** ./src/app/dispatch-quote.gateway.ts ***!
  \*******************************************/
/*! exports provided: DispatchQuoteGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchQuoteGateway", function() { return DispatchQuoteGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_5__);







var DispatchQuoteGateway = /** @class */ (function () {
    function DispatchQuoteGateway(http, ls) {
        this.http = http;
        this.uriQuote = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/quote' : 'http://localhost/quote';
        this.uriQuotePage = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/quote/query/page' : 'http://localhost/quote/query/page';
        this.uriQuoteQueryId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/quote/query/uuid' : 'http://localhost/quote/query/uuid';
        this.uriRatingCard = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/rating-card' : 'http://localhost/rating-card';
        this.uriPriceRule = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/price-rule-config' : 'http://localhost/price-rule-config';
        this.TEST_DATA_RESPONSE = {
            MAJOR_LOCATIONS: {
                whangarei: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                    { m3: 0.08, tonne: 0.025, cost: 31.43 },
                    { m3: 0.15, tonne: 0.05, cost: 35.36 },
                    { m3: 0.23, tonne: 0.075, cost: 37.6 },
                    { m3: 0.3, tonne: 0.1, cost: 40.58 },
                    { m3: 0.45, tonne: 0.15, cost: 43.31 },
                    { m3: 0.6, tonne: 0.2, cost: 45.91 },
                    { m3: 0.75, tonne: 0.25, cost: 51.81 }],
            },
            MINOR_LOCATIONS: {
                zone_1: [
                    { m3: 0.03, tonne: 0.10, cost: 8.83 },
                    { m3: 0.07, tonne: 0.25, cost: 10.82 },
                    { m3: 0.1, tonne: 0.35, cost: 13.08 },
                    { m3: 0.15, tonne: 0.50, cost: 14.34 },
                    { m3: 0.22, tonne: 0.75, cost: 16.12 },
                    { m3: 0.3, tonne: 0.100, cost: 18.07 },
                    { m3: 0.45, tonne: 0.150, cost: 19.33 },
                    { m3: 0.6, tonne: 0.200, cost: 20.43 },
                    { m3: 0.75, tonne: 0.250, cost: 21.53 },
                    { m3: 0.9, tonne: 0.300, cost: 22.06 },
                    { m3: 1.05, tonne: 0.350, cost: 23.06 },
                    { m3: 1.2, tonne: 0.400, cost: 26.47 },
                    { m3: 1.35, tonne: 0.450, cost: 29.46 },
                    { m3: 1.5, tonne: 0.500, cost: 32.88 },
                    { m3: 1.65, tonne: 0.550, cost: 37.39 },
                    { m3: 1.8, tonne: 0.600, cost: 41.92 },
                    { m3: 1.95, tonne: 0.650, cost: 47.32 },
                    { m3: 2.1, tonne: 0.700, cost: 52.62 },
                    { m3: 2.25, tonne: 0.750, cost: 60.56 },
                    { m3: 2.4, tonne: 0.800, cost: 63.65 },
                    { m3: 2.55, tonne: 0.850, cost: 69.28 },
                    { m3: 2.7, tonne: 0.900, cost: 71.38 },
                    { m3: 2.85, tonne: 0.950, cost: 74.68 },
                    { m3: 3, tonne: 1, cost: 75 }
                ],
            },
            COST_RATE_PER_TONNE_OR_KG_BY_LOCATION: {
                zone_1: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            }
        };
        this.ls = ls;
    }
    DispatchQuoteGateway.prototype.setHeaders = function () {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: this.ls.getToken()
            })
        };
    };
    // Rating Card
    DispatchQuoteGateway.prototype.getRatingAllCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.get("" + this.uriRatingCard, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done getting rating card', hres);
                        var res = hres;
                        return res.ratingCards;
                        return hres;
                    }, function (err) {
                        console.log('Err getting rating card', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.getRatingCard = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.get("" + this.uriRatingCard, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done getting rating card', hres);
                        var res = hres;
                        return res.ratingCard;
                    }, function (err) {
                        console.log('Err getting rating card', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.saveRatingCard = function (companyId, entity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var request;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                request = new fr8models__WEBPACK_IMPORTED_MODULE_5__["CreateRatingCardRequest"](companyId, entity.majorLocations, entity.minorLocations, entity.pricingRateLevelList);
                console.log('saveRatingCardRequest', request);
                return [2 /*return*/, this.http.post("" + this.uriRatingCard, request, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done creating rating card', hres);
                        var res = hres;
                        return res.ratingCard;
                    }, function (err) {
                        console.log('Err creating rating card', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.updateRatingCard = function (id, entity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var request;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                request = new fr8models__WEBPACK_IMPORTED_MODULE_5__["UpdateRatingCardRequest"](id, entity);
                return [2 /*return*/, this.http.put(this.uriRatingCard + "/" + id, request, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done update rating card', hres);
                        var res = hres;
                        return res.ratingCard;
                    }, function (err) {
                        console.log('Err update rating card', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.deleteRatingCard = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.delete(this.uriRatingCard + "/" + id, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done delete rating card', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err delete rating card', err);
                    })];
            });
        });
    };
    // Price Rule
    DispatchQuoteGateway.prototype.getPriceRuleConfigs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.get("" + this.uriPriceRule, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done getting price rule config', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err getting price rule config', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.deletePriceRuleConfig = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.delete(this.uriPriceRule + "/" + id, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done delete price rule config', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err delete price rule config', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.savePriceRuleConfig = function (companyId, entity) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var request;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                request = new fr8models__WEBPACK_IMPORTED_MODULE_5__["SavePriceRuleConfigRequest"](companyId, [entity]);
                console.log('savePriceRuleRequest', request);
                return [2 /*return*/, this.http.post("" + this.uriPriceRule, request, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done creating price rule config', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err creating price rule config', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.getQuote = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.get(this.uriQuote + "?id=" + id, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.queryQuotesById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.get(this.uriQuoteQueryId + "?quote_uuid=" + id, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.getQuoteList = function (page, pageSize) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var req;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                req = new fr8models__WEBPACK_IMPORTED_MODULE_5__["GetRecordsRequest"](page, pageSize);
                return [2 /*return*/, this.http.get(this.uriQuotePage + "/?page=" + page + "&page_size=" + pageSize, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done', hres);
                        var res = hres;
                        return res;
                    }, function (err) {
                        console.log('Err', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.postQuote = function (quote) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.post("" + this.uriQuote, quote, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done Creating Quote', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway.prototype.putQuote = function (id, quote) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.setHeaders();
                return [2 /*return*/, this.http.put(this.uriQuote + "/" + id, quote, this.httpOptions)
                        .toPromise().then(function (hres) {
                        console.log('Done Updating Quote', hres);
                        return hres;
                    }, function (err) {
                        console.log('Err', err);
                    })];
            });
        });
    };
    DispatchQuoteGateway = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], DispatchQuoteGateway);
    return DispatchQuoteGateway;
}());



/***/ }),

/***/ "./src/app/dispatch-quote/dispatch-quote.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dispatch-quote/dispatch-quote.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BhdGNoLXF1b3RlL2Rpc3BhdGNoLXF1b3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dispatch-quote/dispatch-quote.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dispatch-quote/dispatch-quote.component.ts ***!
  \************************************************************/
/*! exports provided: DispatchQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchQuoteComponent", function() { return DispatchQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_9__);










var DispatchQuoteComponent = /** @class */ (function () {
    function DispatchQuoteComponent(fb, dispatchProvider, router, loginService, toastr) {
        this.fb = fb;
        this.dispatchProvider = dispatchProvider;
        this.router = router;
        this.loginService = loginService;
        this.toastr = toastr;
        this.messagesDict = {
            ERROR: {
                DEFAULT: 'Sorry we are unable to get your quote at this time, please try again later',
                LOCATION: 'Could not get quote for '
            },
            SUCCESS: {
                DEFAULT: 'Your delivery will be around' // x$ dollar ammount
            }
        };
        this.isEdit = this.router.url.indexOf('edit') > -1;
        this.hideCommentField = !this.loginService.isParentCompanyUser();
        this.cost = '0.00';
        this.message = '';
        this.quoteDbId = this.getId(this.isEdit);
        this.quote = this.quoteDbId ? this.dispatchProvider.getQuote(this.quoteDbId) : this.quote;
        this.quoteId = this.quote ? this.quote.quoteId : '';
        this.cost = this.quote && this.quote.cost ? this.quote.cost.toString() : '0';
        this.initOptions();
        this.createForm(this.quote);
    }
    DispatchQuoteComponent.prototype.getId = function (isEdit) {
        if (isEdit) {
            var urlBits = this.router.url.split('/');
            return parseInt(urlBits[urlBits.length - 1], 10);
        }
        else {
            return null;
        }
    };
    DispatchQuoteComponent.prototype.initOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchProvider.initQuoteConfig()];
                    case 1:
                        _a.sent();
                        this.locationOptions = this.dispatchProvider.getLocationOptions();
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchQuoteComponent.prototype.createForm = function (quote) {
        var _this = this;
        console.log('OnInit Quote', quote);
        if (quote) {
            this.angForm = this.fb.group({
                iCOSRef: [''],
                to: [quote.to],
                from: [quote.from],
                weight: [quote.weight, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                mass: [quote.mass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                comment: [quote.parentCompanyNote],
            });
        }
        else {
            this.angForm = this.fb.group({
                iCOSRef: [''],
                to: [''],
                from: [''],
                weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                mass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                comment: ['']
            });
        }
        this.angForm.valueChanges.subscribe(function () {
            console.log(_this.angForm.getRawValue());
            var raw = _this.angForm.getRawValue();
            // Try set defaults
            _this.getQuote(raw);
        });
    };
    DispatchQuoteComponent.prototype.ngOnInit = function () { };
    DispatchQuoteComponent.prototype.getQuote = function (args) {
        this.quote = this.quote ? this.quote : new fr8models__WEBPACK_IMPORTED_MODULE_9__["Quote"]();
        this.quote.parentCompanyNote = args && args.comment ? args.comment : '';
        // Check ownership
        if (this.isEdit && this.quote && this.quote.id !=
            null && this.quote.companyId !== this.loginService.getUserCompanyId()) {
            console.log('Not updating quote with cost values, as it does not belong to you', this.quote);
            return;
        }
        this.result = this.dispatchProvider
            .getRatingCardQuote(args.to, args.from, parseFloat(args.weight), parseFloat(args.mass));
        console.log('Get Quote :', this.result);
        this.cost = this.result && this.result.cost ? this.result.cost.toFixed(2) : '0.00';
        this.quote.iCOSRef = -1;
        this.quote.cost = parseFloat(this.cost);
        this.quote.weight = parseFloat(args.weight);
        this.quote.mass = parseFloat(args.mass);
        this.quote.to = args.to;
        this.quote.from = args.from;
        console.log('Got Quote:', this.quote);
    };
    DispatchQuoteComponent.prototype.saveQuote = function () {
        var _this = this;
        this.dispatchProvider.saveQuote(this.quoteDbId, this.quote, this.isEdit).then(function (res) {
            console.log(res);
            var opt = JSON.parse(JSON.stringify(_this.toastr.toastrConfig));
            opt.positionClass = 'toast-bottom-right';
            opt.toastClass = 'notyf confirm';
            if (res) {
                opt.toastComponent = _notify_success_toastr__WEBPACK_IMPORTED_MODULE_4__["NotyfToastSuccess"];
                _this.toastr.success('Saved Quote', '', opt);
                _this.router.navigate(['dispatch/quote/']);
            }
            else {
                opt.toastComponent = _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_5__["NotyfToastFail"];
                _this.toastr.error('Failed to Save Quote', '', opt);
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    DispatchQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispatch-quote',
            template: __webpack_require__(/*! raw-loader!./dispatch-quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/dispatch-quote/dispatch-quote.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-quote.component.css */ "./src/app/dispatch-quote/dispatch-quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _dispatch_provider__WEBPACK_IMPORTED_MODULE_7__["DispatchProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], DispatchQuoteComponent);
    return DispatchQuoteComponent;
}());



/***/ }),

/***/ "./src/app/dispatch-quote/dispatch-quote.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dispatch-quote/dispatch-quote.service.ts ***!
  \**********************************************************/
/*! exports provided: DispatchQuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchQuoteService", function() { return DispatchQuoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _quote_price_level_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quote-price-level.service */ "./src/app/dispatch-quote/quote-price-level.service.ts");
/* harmony import */ var _quote_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-interface */ "./src/app/dispatch-quote/quote-interface.ts");
/* harmony import */ var _quote_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");
/* harmony import */ var _dispatch_quote_gateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dispatch-quote.gateway */ "./src/app/dispatch-quote.gateway.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _rating_card_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rating-card.service */ "./src/app/rating-card.service.ts");










var DispatchQuoteService = /** @class */ (function () {
    function DispatchQuoteService(loginService, quoteConfigService, dispatchQuoteGateway, quotePricingLevelService, quoteInterface, ratingCardService) {
        this.loginService = loginService;
        this.quoteConfigService = quoteConfigService;
        this.dispatchQuoteGateway = dispatchQuoteGateway;
        this.quotePricingLevelService = quotePricingLevelService;
        this.quoteInterface = quoteInterface;
        this.ratingCardService = ratingCardService;
        this.currentPageSize = 20;
        this.currentPage = 0;
        this.quoteConfigService = new _quote_config_service__WEBPACK_IMPORTED_MODULE_6__["QuoteConfig"]();
        this.initQuoteConfig();
    }
    // Init functions
    DispatchQuoteService.prototype.initQuoteConfig = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getPriceRuleConfig()];
                    case 1:
                        _a.priceRuleConfig = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.getCurrentRatingCard()];
                    case 2:
                        _b.ratingCardConfig = _c.sent();
                        this.quoteConfigService.setRatingCardData(JSON.parse(JSON.stringify(this.ratingCardConfig)));
                        this.quoteConfigService.init();
                        this.quotePricingLevelService.initialize(this.quoteConfigService);
                        return [2 /*return*/];
                }
            });
        });
    };
    DispatchQuoteService.prototype.getCurrentRatingCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, def;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ratingCardService.listRatingCard()];
                    case 1:
                        _a.sent();
                        res = this.ratingCardService.getMyRatingCard();
                        def = this.ratingCardService.getDefaultRatingCard();
                        console.log('Getting Current Rating Card', 'res', this.ratingCardService.ratingCards, 'def', def);
                        return [2 /*return*/, res ? res : def];
                }
            });
        });
    };
    DispatchQuoteService.prototype.listPriceRules = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchQuoteGateway.getPriceRuleConfigs()];
                    case 1:
                        res = _a.sent();
                        // TODO: deal with the paging response later
                        this.priceRuleConfigs = res.records;
                        return [2 /*return*/, res.records];
                }
            });
        });
    };
    DispatchQuoteService.prototype.getPriceRuleConfig = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listPriceRules()];
                    case 1:
                        res = _a.sent();
                        // Get your own config
                        res = res && res.length && res.length > 0 ? res.filter(function (conf) {
                            return conf.companyId === _this.loginService.getUserCompanyId();
                        }) : null;
                        return [4 /*yield*/, this.parsePriceConfigResponse(res[0])];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Parse response functions
    DispatchQuoteService.prototype.parsePriceConfigResponse = function (config) {
        if (config && config.data && config.data.length > 0) {
            var data = config.data[0]; // Hard set to one price rule config set
            var parsedConfig = new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRuleConfig"](config.id, config.companyName, config.companyId, data.priceRuleSet, data.priceRuleLocationConditionals);
            console.log('Using Price Rule Config:', parsedConfig);
            return parsedConfig;
        }
        else {
            console.log('using default config, could not parse priceConfigResponse:', config);
            var prConfig = new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRuleConfig"]();
            var pr = new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRule"](0, fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRule"].TYPE.RATING_CARD);
            var prList = [pr];
            var priceRuleSet = new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRuleSet"](prList);
            prConfig.priceRuleSet = priceRuleSet;
            return prConfig;
        }
    };
    // Get Set Price Rule list
    DispatchQuoteService.prototype.getPriceRuleSetList = function () {
        return this.priceRuleConfigs;
    };
    DispatchQuoteService.prototype.getPriceRuleConfigById = function (id) {
        var res = this.priceRuleConfigs.filter(function (entity) {
            return entity.id === id;
        });
        // TODO: extend this later on, data can return a list of configs,
        // now however we are only using the one config filter
        var config = res && res.length > 0 ? res[0] : null;
        return new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRuleConfig"](config.id, config.companyName, config.companyId, config.data[0].priceRuleSet, config.data[0].priceRuleLocationConditionals);
    };
    DispatchQuoteService.prototype.savePriceRuleSet = function (priceRuleConfig) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchQuoteGateway.savePriceRuleConfig(priceRuleConfig.companyId, priceRuleConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispatchQuoteService.prototype.removePriceRuleConfig = function (id) {
        var _this = this;
        return this.dispatchQuoteGateway.deletePriceRuleConfig(id)
            .then(function () {
            _this.priceRuleConfigs = _this.priceRuleConfigs.filter(function (priceRuleConfig) {
                return priceRuleConfig.id !== id;
            });
        });
    };
    DispatchQuoteService.prototype.isLocationInList = function (locationList, loc) {
        loc = loc.replace(/North/gi, 'nth').replace(' ', '_').toLowerCase();
        return lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](locationList, loc);
    };
    // Quote
    DispatchQuoteService.prototype.getRatingCardQuote = function (to, from, weight, mass) {
        var _this = this;
        // rating card only calculate based on auckland as from
        if (to && to.toLowerCase && to.toLowerCase() === 'auckland') {
            var newTo = from;
            from = to;
            to = newTo;
        }
        // Does not need to add all of the params
        var request = new fr8models__WEBPACK_IMPORTED_MODULE_3__["QuoteInterfaceRequest"](to, from, weight, mass);
        // Local company config
        var priceConf = new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceConfig"](this.ratingCardConfig);
        // Get PR from config loaded
        var res = this.priceRuleConfig.priceRuleLocationConditionals &&
            this.priceRuleConfig.priceRuleLocationConditionals.length > 0 ?
            this.priceRuleConfig.priceRuleLocationConditionals.filter(function (conditional) {
                // Get match TO LOC to conditional
                return _this.isLocationInList(conditional.locationList, to);
            })
            : null;
        var locationConditional = res && res.length > 0 ? res[0] : null;
        console.log('Price Rule Config', this.priceRuleConfig);
        console.log('locationConditional Loaded', locationConditional);
        if (locationConditional && locationConditional.locationList) {
            locationConditional.locationList = fr8models__WEBPACK_IMPORTED_MODULE_3__["ModelUtils"].valuesToLowerCase(locationConditional.locationList);
        }
        if (locationConditional && locationConditional.locationList &&
            locationConditional.locationList.indexOf(to.toLowerCase()) > -1) {
            var prList = locationConditional.priceRuleSet.priceRules;
            return this.quoteInterface.getQuote(prList, priceConf, request, locationConditional);
        }
        else {
            var prList = this.priceRuleConfig.priceRuleSet.priceRules;
            // If no defaults are set, then use rating card
            prList = prList && prList.length > 0 ? prList : [new fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRule"](0, fr8models__WEBPACK_IMPORTED_MODULE_3__["PriceRule"].TYPE.RATING_CARD)];
            return this.quoteInterface.getQuote(prList, priceConf, request, null);
        }
    };
    DispatchQuoteService.prototype.getQuotes = function () {
        return this.quoteList;
    };
    DispatchQuoteService.prototype.getQuote = function (id) {
        return this.quoteList ? this.quoteList.filter(function (quote) {
            return quote.id === id;
        })[0] : null;
    };
    DispatchQuoteService.prototype.saveQuote = function (quote) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchQuoteGateway.postQuote(quote)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispatchQuoteService.prototype.updateQuote = function (id, quote) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchQuoteGateway.putQuote(id, quote)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DispatchQuoteService.prototype.queryQuotesById = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.dispatchQuoteGateway.queryQuotesById(id)];
                    case 1:
                        _a.quoteList = _b.sent();
                        return [2 /*return*/, this.quoteList];
                }
            });
        });
    };
    DispatchQuoteService.prototype.listQuotes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dispatchQuoteGateway.getQuoteList(this.currentPage, this.currentPageSize)];
                    case 1:
                        res = _a.sent();
                        this.quoteList = res.totalCount > 0 ? res.records : [];
                        this.currentPage = res.page;
                        this.currentPageSize = res.pageSize;
                        return [2 /*return*/, this.quoteList];
                }
            });
        });
    };
    DispatchQuoteService.prototype.getLocations = function () {
        return this.quotePricingLevelService.getLocations();
    };
    DispatchQuoteService.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
    };
    DispatchQuoteService.prototype.setCurrentPageSize = function (pageSize) {
        this.currentPageSize = pageSize;
    };
    DispatchQuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"],
            _quote_config_service__WEBPACK_IMPORTED_MODULE_6__["QuoteConfig"],
            _dispatch_quote_gateway__WEBPACK_IMPORTED_MODULE_7__["DispatchQuoteGateway"],
            _quote_price_level_service__WEBPACK_IMPORTED_MODULE_4__["QuotePriceLevelService"],
            _quote_interface__WEBPACK_IMPORTED_MODULE_5__["QuoteInterface"],
            _rating_card_service__WEBPACK_IMPORTED_MODULE_9__["RatingCardService"]])
    ], DispatchQuoteService);
    return DispatchQuoteService;
}());



/***/ }),

/***/ "./src/app/dispatch-quote/quote-config.service.ts":
/*!********************************************************!*\
  !*** ./src/app/dispatch-quote/quote-config.service.ts ***!
  \********************************************************/
/*! exports provided: QuoteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteConfig", function() { return QuoteConfig; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @desc Replaces a char at a certain pos in the string
 * @param str origin string
 * @param index index of char which is being changed
 * @param chr new char which will change the string char at given index
 */
function setCharAt(str, index, chr) {
    if (index > str.length - 1) {
        return str;
    }
    else {
        return str.substr(0, index) + chr + str.substr(index + 1);
    }
}
var QuoteConfig = /** @class */ (function () {
    function QuoteConfig() {
        this.LOCATIONS = {};
        this.MINOR_TOWNS_KEYS = {};
        this.PRICING_LEVEL_KEY = {};
        this.MAJOR_LOCATIONS = {
            // load in zones from
            whangarei: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 35.36 },
                { m3: 0.23, tonne: 0.075, cost: 37.6 },
                { m3: 0.3, tonne: 0.1, cost: 40.58 },
                { m3: 0.45, tonne: 0.15, cost: 43.31 },
                { m3: 0.6, tonne: 0.2, cost: 45.91 },
                { m3: 0.75, tonne: 0.25, cost: 51.81 }],
            hamilton: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 33.85 },
                { m3: 0.23, tonne: 0.075, cost: 37.6 },
                { m3: 0.3, tonne: 0.1, cost: 39.29 },
                { m3: 0.45, tonne: 0.15, cost: 41.71 },
                { m3: 0.6, tonne: 0.2, cost: 43.39 },
                { m3: 0.75, tonne: 0.25, cost: 44.9 }],
            tauranga: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 35.47 },
                { m3: 0.23, tonne: 0.075, cost: 37.83 },
                { m3: 0.3, tonne: 0.1, cost: 41.15 },
                { m3: 0.45, tonne: 0.15, cost: 44.85 },
                { m3: 0.6, tonne: 0.2, cost: 48.55 },
                { m3: 0.75, tonne: 0.25, cost: 52.71 }],
            rotorua: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 35.47 },
                { m3: 0.23, tonne: 0.075, cost: 37.83 },
                { m3: 0.3, tonne: 0.1, cost: 41.15 },
                { m3: 0.45, tonne: 0.15, cost: 44.85 },
                { m3: 0.6, tonne: 0.2, cost: 48.55 },
                { m3: 0.75, tonne: 0.25, cost: 52.71 }],
            napier: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 39.07 },
                { m3: 0.23, tonne: 0.075, cost: 47.82 },
                { m3: 0.3, tonne: 0.1, cost: 56.08 },
                { m3: 0.45, tonne: 0.15, cost: 61.29 },
                { m3: 0.6, tonne: 0.2, cost: 65.56 },
                { m3: 0.75, tonne: 0.25, cost: 70.16 }],
            hastings: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 39.07 },
                { m3: 0.23, tonne: 0.075, cost: 47.82 },
                { m3: 0.3, tonne: 0.1, cost: 56.08 },
                { m3: 0.45, tonne: 0.15, cost: 61.29 },
                { m3: 0.6, tonne: 0.2, cost: 65.56 },
                { m3: 0.75, tonne: 0.25, cost: 70.16 }],
            gisborne: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 36.04 },
                { m3: 0.23, tonne: 0.075, cost: 41.97 },
                { m3: 0.3, tonne: 0.1, cost: 51.53 },
                { m3: 0.45, tonne: 0.15, cost: 61.29 },
                { m3: 0.6, tonne: 0.2, cost: 81.72 },
                { m3: 0.75, tonne: 0.25, cost: 96.77 }],
            new_plymouth: // new plymouth
            [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 40.96 },
                { m3: 0.23, tonne: 0.075, cost: 50.5 },
                { m3: 0.3, tonne: 0.1, cost: 62.25 },
                { m3: 0.45, tonne: 0.15, cost: 69.03 },
                { m3: 0.6, tonne: 0.2, cost: 76.11 },
                { m3: 0.75, tonne: 0.25, cost: 81.39 }],
            palmerston_nth: // palmerston nth
            [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 40.96 },
                { m3: 0.23, tonne: 0.075, cost: 50.5 },
                { m3: 0.3, tonne: 0.1, cost: 63.54 },
                { m3: 0.45, tonne: 0.15, cost: 69.03 },
                { m3: 0.6, tonne: 0.2, cost: 76.11 },
                { m3: 0.75, tonne: 0.25, cost: 81.39 }],
            wellington: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 31.43 },
                { m3: 0.15, tonne: 0.05, cost: 43.22 },
                { m3: 0.23, tonne: 0.075, cost: 53.83 },
                { m3: 0.3, tonne: 0.1, cost: 64.21 },
                { m3: 0.45, tonne: 0.15, cost: 73.31 },
                { m3: 0.6, tonne: 0.2, cost: 82.84 },
                { m3: 0.75, tonne: 0.25, cost: 87.85 }],
            blenheim: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 60.9 },
                { m3: 0.3, tonne: 0.1, cost: 66.9 },
                { m3: 0.45, tonne: 0.15, cost: 72.85 },
                { m3: 0.6, tonne: 0.2, cost: 84.86 },
                { m3: 0.75, tonne: 0.25, cost: 89.98 }],
            christchurch: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 60.9 },
                { m3: 0.3, tonne: 0.1, cost: 66.9 },
                { m3: 0.45, tonne: 0.15, cost: 72.85 },
                { m3: 0.6, tonne: 0.2, cost: 84.86 },
                { m3: 0.75, tonne: 0.25, cost: 89.98 }],
            nelson: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 62.3 },
                { m3: 0.3, tonne: 0.1, cost: 69.49 },
                { m3: 0.45, tonne: 0.15, cost: 75.33 },
                { m3: 0.6, tonne: 0.2, cost: 85.99 },
                { m3: 0.75, tonne: 0.25, cost: 96.09 }],
            ashburton: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 61.06 },
                { m3: 0.3, tonne: 0.1, cost: 68.37 },
                { m3: 0.45, tonne: 0.15, cost: 74.87 },
                { m3: 0.6, tonne: 0.2, cost: 84.64 },
                { m3: 0.75, tonne: 0.25, cost: 93.74 }],
            westport: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 69.38 },
                { m3: 0.3, tonne: 0.1, cost: 78.91 },
                { m3: 0.45, tonne: 0.15, cost: 89.24 },
                { m3: 0.6, tonne: 0.2, cost: 102.94 },
                { m3: 0.75, tonne: 0.25, cost: 110.18 }],
            greymouth: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 71.29 },
                { m3: 0.3, tonne: 0.1, cost: 80.71 },
                { m3: 0.45, tonne: 0.15, cost: 93.51 },
                { m3: 0.6, tonne: 0.2, cost: 106.3 },
                { m3: 0.75, tonne: 0.25, cost: 118.04 }],
            // gore: // Seems that its in both major and minor, so removing major
            //   [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
            //   { m3: 0.08, tonne: 0.025, cost: 35.93 },
            //   { m3: 0.15, tonne: 0.05, cost: 51.08 },
            //   { m3: 0.23, tonne: 0.075, cost: 60.95 },
            //   { m3: 0.3, tonne: 0.1, cost: 69.03 },
            //   { m3: 0.45, tonne: 0.15, cost: 83.97 },
            //   { m3: 0.6, tonne: 0.2, cost: 96.88 },
            //   { m3: 0.75, tonne: 0.25, cost: 101.03 }],
            oamaru: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 61.06 },
                { m3: 0.3, tonne: 0.1, cost: 68.37 },
                { m3: 0.45, tonne: 0.15, cost: 74.87 },
                { m3: 0.6, tonne: 0.2, cost: 84.64 },
                { m3: 0.75, tonne: 0.25, cost: 93.74 }],
            timaru: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 61.06 },
                { m3: 0.3, tonne: 0.1, cost: 68.37 },
                { m3: 0.45, tonne: 0.15, cost: 74.87 },
                { m3: 0.6, tonne: 0.2, cost: 84.64 },
                { m3: 0.75, tonne: 0.25, cost: 93.74 }],
            dunedin: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 60.95 },
                { m3: 0.3, tonne: 0.1, cost: 69.03 },
                { m3: 0.45, tonne: 0.15, cost: 83.97 },
                { m3: 0.6, tonne: 0.2, cost: 96.88 },
                { m3: 0.75, tonne: 0.25, cost: 101.03 }],
            invercargill: [{ m3: 0.03, tonne: 0.015, cost: 26.94 },
                { m3: 0.08, tonne: 0.025, cost: 35.93 },
                { m3: 0.15, tonne: 0.05, cost: 51.08 },
                { m3: 0.23, tonne: 0.075, cost: 64.99 },
                { m3: 0.3, tonne: 0.1, cost: 74.43 },
                { m3: 0.45, tonne: 0.15, cost: 82.17 },
                { m3: 0.6, tonne: 0.2, cost: 95.3 },
                { m3: 0.75, tonne: 0.25, cost: 106.19 }]
        };
        this.MINOR_LOCATIONS = {
            zone_1: [
                { m3: 0.03, tonne: 0.10, cost: 8.83 },
                { m3: 0.07, tonne: 0.25, cost: 10.82 },
                { m3: 0.1, tonne: 0.35, cost: 13.08 },
                { m3: 0.15, tonne: 0.50, cost: 14.34 },
                { m3: 0.22, tonne: 0.75, cost: 16.12 },
                { m3: 0.3, tonne: 0.100, cost: 18.07 },
                { m3: 0.45, tonne: 0.150, cost: 19.33 },
                { m3: 0.6, tonne: 0.200, cost: 20.43 },
                { m3: 0.75, tonne: 0.250, cost: 21.53 },
                { m3: 0.9, tonne: 0.300, cost: 22.06 },
                { m3: 1.05, tonne: 0.350, cost: 23.06 },
                { m3: 1.2, tonne: 0.400, cost: 26.47 },
                { m3: 1.35, tonne: 0.450, cost: 29.46 },
                { m3: 1.5, tonne: 0.500, cost: 32.88 },
                { m3: 1.65, tonne: 0.550, cost: 37.39 },
                { m3: 1.8, tonne: 0.600, cost: 41.92 },
                { m3: 1.95, tonne: 0.650, cost: 47.32 },
                { m3: 2.1, tonne: 0.700, cost: 52.62 },
                { m3: 2.25, tonne: 0.750, cost: 60.56 },
                { m3: 2.4, tonne: 0.800, cost: 63.65 },
                { m3: 2.55, tonne: 0.850, cost: 69.28 },
                { m3: 2.7, tonne: 0.900, cost: 71.38 },
                { m3: 2.85, tonne: 0.950, cost: 74.68 },
                { m3: 3, tonne: 1, cost: 75 }
            ],
            zone_2: [
                { m3: 0.03, tonne: 10, cost: 9.93 },
                { m3: 0.07, tonne: 25, cost: 11.6 },
                { m3: 0.1, tonne: 35, cost: 13.23 },
                { m3: 0.15, tonne: 50, cost: 14.92 },
                { m3: 0.22, tonne: 75, cost: 16.76 },
                { m3: 0.3, tonne: 100, cost: 19.33 },
                { m3: 0.45, tonne: 150, cost: 20.43 },
                { m3: 0.6, tonne: 200, cost: 21.37 },
                { m3: 0.75, tonne: 0.250, cost: 22.75 },
                { m3: 0.9, tonne: 0.300, cost: 24.11 },
                { m3: 1.05, tonne: 0.350, cost: 27.89 },
                { m3: 1.2, tonne: 0.400, cost: 31.67 },
                { m3: 1.35, tonne: 0.450, cost: 36.6 },
                { m3: 1.5, tonne: 0.500, cost: 39.29 },
                { m3: 1.65, tonne: 0.550, cost: 43.43 },
                { m3: 1.8, tonne: 0.600, cost: 48.01 },
                { m3: 1.95, tonne: 0.650, cost: 51.31 },
                { m3: 2.1, tonne: 0.700, cost: 59.14 },
                { m3: 2.25, tonne: 0.750, cost: 69.69 },
                { m3: 2.4, tonne: 0.800, cost: 78.04 },
                { m3: 2.55, tonne: 0.850, cost: 86.03 },
                { m3: 2.7, tonne: 0.900, cost: 91.96 },
                { m3: 2.85, tonne: 0.950, cost: 93.96 },
                { m3: 3, tonne: 1, cost: 97.06 }
            ],
            zone_3: [
                { m3: 0.03, tonne: 0.10, cost: 11.24 },
                { m3: 0.07, tonne: 0.25, cost: 12.18 },
                { m3: 0.1, tonne: 0.35, cost: 16.02 },
                { m3: 0.15, tonne: 0.50, cost: 17.43 },
                { m3: 0.22, tonne: 0.75, cost: 18.75 },
                { m3: 0.3, tonne: 0.100, cost: 22.63 },
                { m3: 0.45, tonne: 0.150, cost: 23.37 },
                { m3: 0.6, tonne: 0.200, cost: 25.95 },
                { m3: 0.75, tonne: 0.250, cost: 28 },
                { m3: 0.9, tonne: 0.300, cost: 28.79 },
                { m3: 1.05, tonne: 0.350, cost: 33.61 },
                { m3: 1.2, tonne: 0.400, cost: 37.5 },
                { m3: 1.35, tonne: 0.450, cost: 40.86 },
                { m3: 1.5, tonne: 0.500, cost: 44.8 },
                { m3: 1.65, tonne: 0.550, cost: 50.32 },
                { m3: 1.8, tonne: 0.600, cost: 55.72 },
                { m3: 1.95, tonne: 0.650, cost: 64.24 },
                { m3: 2.1, tonne: 0.700, cost: 72.27 },
                { m3: 2.25, tonne: 0.750, cost: 80.14 },
                { m3: 2.4, tonne: 0.800, cost: 91.75 },
                { m3: 2.55, tonne: 0.850, cost: 103.68 },
                { m3: 2.7, tonne: 0.900, cost: 108.67 },
                { m3: 2.85, tonne: 0.950, cost: 112.44 },
                { m3: 3, tonne: 1, cost: 115.81 }
            ],
            zone_4: [
                { m3: 0.03, tonne: 0.10, cost: 12.18 },
                { m3: 0.07, tonne: 0.25, cost: 14.34 },
                { m3: 0.1, tonne: 0.35, cost: 16.28 },
                { m3: 0.15, tonne: 0.50, cost: 19.33 },
                { m3: 0.22, tonne: 0.75, cost: 23.37 },
                { m3: 0.3, tonne: 0.100, cost: 25.47 },
                { m3: 0.45, tonne: 0.150, cost: 29.51 },
                { m3: 0.6, tonne: 0.200, cost: 31.46 },
                { m3: 0.75, tonne: 0.250, cost: 33.09 },
                { m3: 0.9, tonne: 0.300, cost: 39.13 },
                { m3: 1.05, tonne: 0.350, cost: 42.9 },
                { m3: 1.2, tonne: 0.400, cost: 51.31 },
                { m3: 1.35, tonne: 0.450, cost: 58.66 },
                { m3: 1.5, tonne: 0.500, cost: 67.85 },
                { m3: 1.65, tonne: 0.550, cost: 76.42 },
                { m3: 1.8, tonne: 0.600, cost: 86.08 },
                { m3: 1.95, tonne: 0.650, cost: 94.85 },
                { m3: 2.1, tonne: 0.700, cost: 99.84 },
                { m3: 2.25, tonne: 0.750, cost: 105.67 },
                { m3: 2.4, tonne: 0.800, cost: 111.82 },
                { m3: 2.55, tonne: 0.850, cost: 120.43 },
                { m3: 2.7, tonne: 0.900, cost: 125.1 },
                { m3: 2.85, tonne: 0.950, cost: 128.89 },
                { m3: 3, tonne: 1, cost: 131.25 }
            ],
            zone_5: [
                { m3: 0.03, tonne: 0.10, cost: 16.54 },
                { m3: 0.07, tonne: 0.25, cost: 19.33 },
                { m3: 0.1, tonne: 0.35, cost: 24.37 },
                { m3: 0.15, tonne: 0.50, cost: 29.25 },
                { m3: 0.22, tonne: 0.75, cost: 39.86 },
                { m3: 0.3, tonne: 0.100, cost: 41.02 },
                { m3: 0.45, tonne: 0.150, cost: 46.27 },
                { m3: 0.6, tonne: 0.200, cost: 51.52 },
                { m3: 0.75, tonne: 0.250, cost: 54.62 },
                { m3: 0.9, tonne: 0.300, cost: 57.93 },
                { m3: 1.05, tonne: 0.350, cost: 65.29 },
                { m3: 1.2, tonne: 0.400, cost: 68.96 },
                { m3: 1.35, tonne: 0.450, cost: 77.99 },
                { m3: 1.5, tonne: 0.500, cost: 87.13 },
                { m3: 1.65, tonne: 0.550, cost: 94.32 },
                { m3: 1.8, tonne: 0.600, cost: 104.99 },
                { m3: 1.95, tonne: 0.650, cost: 118.01 },
                { m3: 2.1, tonne: 0.700, cost: 124.63 },
                { m3: 2.25, tonne: 0.750, cost: 126.84 },
                { m3: 2.4, tonne: 0.800, cost: 131.25 },
                { m3: 2.55, tonne: 0.850, cost: 134.03 },
                { m3: 2.7, tonne: 0.900, cost: 136.34 },
                { m3: 2.85, tonne: 0.950, cost: 139.65 },
                { m3: 3, tonne: 1, cost: 142.28 }
            ],
            zone_6: [
                { m3: 0.03, tonne: 0.10, cost: 21.53 },
                { m3: 0.07, tonne: 0.25, cost: 26.42 },
                { m3: 0.1, tonne: 0.35, cost: 29.25 },
                { m3: 0.15, tonne: 0.50, cost: 33.93 },
                { m3: 0.22, tonne: 0.75, cost: 39.86 },
                { m3: 0.3, tonne: 0.100, cost: 47.17 },
                { m3: 0.45, tonne: 0.150, cost: 52.42 },
                { m3: 0.6, tonne: 0.200, cost: 58.4 },
                { m3: 0.75, tonne: 0.250, cost: 62.34 },
                { m3: 0.9, tonne: 0.300, cost: 71.69 },
                { m3: 1.05, tonne: 0.350, cost: 79.99 },
                { m3: 1.2, tonne: 0.400, cost: 88.4 },
                { m3: 1.35, tonne: 0.450, cost: 100.63 },
                { m3: 1.5, tonne: 0.500, cost: 113.08 },
                { m3: 1.65, tonne: 0.550, cost: 126.84 },
                { m3: 1.8, tonne: 0.600, cost: 135.14 },
                { m3: 1.95, tonne: 0.650, cost: 143.38 },
                { m3: 2.1, tonne: 0.700, cost: 153.83 },
                { m3: 2.25, tonne: 0.750, cost: 161.6 },
                { m3: 2.4, tonne: 0.800, cost: 171.11 },
                { m3: 2.55, tonne: 0.850, cost: 177.52 },
                { m3: 2.7, tonne: 0.900, cost: 184.77 },
                { m3: 2.85, tonne: 0.950, cost: 187.66 },
                { m3: 3, tonne: 1, cost: 193.01 }
            ]
        };
        // Pricing level
        this.MINOR_MAJOR_REL_KEY = {};
        this.MINOR_LOCATION_KEY_DICT = {
            zone_1: [
                'bell_block',
                'cambridge',
                'mosgiel',
            ],
            zone_2: [
                'bluff',
                'feilding',
                'inglewood',
                'rangiora',
                'taupo',
                'te_awamutu',
                'waitara',
            ],
            zone_3: [
                'balclutha',
                'bulls',
                'edgecumbe',
                'eltham',
                'foxton',
                'gore',
                'greytown',
                'levin',
                'marton',
                'matamata',
                'morrinsville',
                'otorohanga',
                'otaki',
                'paraparaumu',
                'putaruru',
                'stratford',
                'te_aroha',
                'te_puke',
                'wanganui',
            ],
            zone_4: [
                'alexandra',
                'arrowtown',
                'carterton',
                'cromwell',
                'dargaville',
                'featherston',
                'hawera',
                'hokitika',
                'kaikohe',
                'kerikeri',
                'masterton',
                'queenstown',
                'te_kuiti',
                'thames',
                'tokoroa',
                'whakatane',
                'woodville',
            ],
            zone_5: [
                'bennydale',
                'coromandel',
                'kaitaia',
                'opotiki',
                'paeroa',
                'taumarunui',
                'wairoa',
                'warkworth',
            ],
            zone_6: [
                'turangi',
                'wellsford',
                'whitianga',
            ],
        };
        this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION = {
            zone_1: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            zone_2: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            zone_3: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            zone_4: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            zone_5: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            zone_6: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            whangarei: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            hamilton: { cost_p_m3: 44.91, cost_p_tonne: 134.7 },
            tauranga: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            rotorua: { cost_p_m3: 50.51, cost_p_tonne: 151.54 },
            hastings: { cost_p_m3: 69.61, cost_p_tonne: 208.8 },
            napier: { cost_p_m3: 69.61, cost_p_tonne: 208.8 },
            gisborne: { cost_p_m3: 94.29, cost_p_tonne: 282.88 },
            new_plymouth: { cost_p_m3: 78.58, cost_p_tonne: 235.73 },
            palmerston_nth: { cost_p_m3: 78.58, cost_p_tonne: 235.73 },
            wellington: { cost_p_m3: 83.08, cost_p_tonne: 249.21 },
            blenheim: { cost_p_m3: 161.64, cost_p_tonne: 323.3 },
            christchurch: { cost_p_m3: 161.64, cost_p_tonne: 323.3 },
            nelson: { cost_p_m3: 190.8, cost_p_tonne: 381.7 },
            ashburton: { cost_p_m3: 218.9, cost_p_tonne: 437.8 },
            westport: { cost_p_m3: 224.5, cost_p_tonne: 449 },
            greymouth: { cost_p_m3: 230.1, cost_p_tonne: 460.3 },
            // gore: { cost_p_m3: 222.3, cost_p_tonne: 444.5 },
            oamaru: { cost_p_m3: 218.9, cost_p_tonne: 437.8 },
            timaru: { cost_p_m3: 218.9, cost_p_tonne: 437.8 },
            dunedin: { cost_p_m3: 222.3, cost_p_tonne: 444.5 },
            invercargill: { cost_p_m3: 230.1, cost_p_tonne: 460.3 }
        };
        this.USER_FRIENDLY_LOCATION_DICT = {
            whangarei: 'whangarei',
            hamilton: 'hamilton',
            tauranga: 'tauranga',
            rotorua: 'rotorua',
            napier: 'Napier',
            hastings: 'Hastings',
            gisborne: 'Gisborne',
            new_plymouth: 'New Plymouth',
            palmerston_nth: 'Palmerston North',
            wellington: 'Wellington',
            blenheim: 'Blenheim',
            christchurch: 'Christchurch',
            nelson: 'Nelson',
            ashburton: 'Ashburton',
            westport: 'Westport',
            greymouth: 'Greymouth',
            gore: 'Gore',
            oamaru: 'Oamaru',
            timaru: 'Timaru',
            dunedin: 'Dunedin',
            invercargill: 'Invercargill',
        };
    }
    QuoteConfig.prototype.init = function () {
        var _this = this;
        // do setup here
        var tempMinorLocationsDict = JSON.parse(JSON.stringify(this.MINOR_LOCATIONS));
        var tempMajorLocationsDict = JSON.parse(JSON.stringify(this.MAJOR_LOCATIONS));
        // Note that input into _ (lodash) functions are manipulated and values are persisted
        // rather than the reference
        var _locations = {};
        var tempMinorKeys = Object.keys(tempMinorLocationsDict);
        for (var _i = 0, tempMinorKeys_1 = tempMinorKeys; _i < tempMinorKeys_1.length; _i++) {
            var minorKey = tempMinorKeys_1[_i];
            var value = tempMinorLocationsDict[minorKey];
            _locations[minorKey] = value;
        }
        var tempMajorKeys = Object.keys(tempMajorLocationsDict);
        for (var _a = 0, tempMajorKeys_1 = tempMajorKeys; _a < tempMajorKeys_1.length; _a++) {
            var majorKey = tempMajorKeys_1[_a];
            var value = tempMajorLocationsDict[majorKey];
            _locations[majorKey] = value;
        }
        var __locations = _locations;
        this.LOCATIONS = __locations;
        // Load in pricing level keys of all Locations
        var tempKeyList = Object.keys(_locations);
        var pricingLevel = {};
        tempKeyList.forEach(function (key) {
            pricingLevel[key] = key;
        });
        this.PRICING_LEVEL_KEY = pricingLevel;
        this.MINOR_MAJOR_REL_KEY = {
            bell_block: this.PRICING_LEVEL_KEY.new_plymouth,
            bluff: this.PRICING_LEVEL_KEY.invercargill,
            cambridge: this.PRICING_LEVEL_KEY.hamilton,
            mosgiel: this.PRICING_LEVEL_KEY.dunedin,
            feilding: this.PRICING_LEVEL_KEY.palmerston_nth,
            inglewood: this.PRICING_LEVEL_KEY.new_plymouth,
            rangiora: this.PRICING_LEVEL_KEY.christchurch,
            taupo: this.PRICING_LEVEL_KEY.rotorua,
            te_awamutu: this.PRICING_LEVEL_KEY.hamilton,
            waitara: this.PRICING_LEVEL_KEY.new_plymouth,
            balclutha: this.PRICING_LEVEL_KEY.dunedin,
            bulls: this.PRICING_LEVEL_KEY.palmerston_nth,
            edgecumbe: this.PRICING_LEVEL_KEY.tauranga,
            eltham: this.PRICING_LEVEL_KEY.new_plymouth,
            foxton: this.PRICING_LEVEL_KEY.palmerston_nth,
            gore: this.PRICING_LEVEL_KEY.invercargill,
            greytown: this.PRICING_LEVEL_KEY.wellington,
            levin: this.PRICING_LEVEL_KEY.palmerston_nth,
            marton: this.PRICING_LEVEL_KEY.palmerston_nth,
            matamata: this.PRICING_LEVEL_KEY.hamilton,
            morrinsville: this.PRICING_LEVEL_KEY.hamilton,
            otorohanga: this.PRICING_LEVEL_KEY.hamilton,
            otaki: this.PRICING_LEVEL_KEY.palmerston_nth,
            paraparaumu: this.PRICING_LEVEL_KEY.wellington,
            putaruru: this.PRICING_LEVEL_KEY.hamilton,
            stratford: this.PRICING_LEVEL_KEY.new_plymouth,
            te_aroha: this.PRICING_LEVEL_KEY.hamilton,
            te_puke: this.PRICING_LEVEL_KEY.tauranga,
            wanganui: this.PRICING_LEVEL_KEY.palmerston_nth,
            alexandra: this.PRICING_LEVEL_KEY.dunedin,
            arrowtown: this.PRICING_LEVEL_KEY.dunedin,
            carterton: this.PRICING_LEVEL_KEY.wellington,
            cromwell: this.PRICING_LEVEL_KEY.dunedin,
            dargaville: this.PRICING_LEVEL_KEY.whangarei,
            featherston: this.PRICING_LEVEL_KEY.wellington,
            hawera: this.PRICING_LEVEL_KEY.new_plymouth,
            hokitika: this.PRICING_LEVEL_KEY.greymouth,
            kaikohe: this.PRICING_LEVEL_KEY.whangarei,
            kerikeri: this.PRICING_LEVEL_KEY.whangarei,
            masterton: this.PRICING_LEVEL_KEY.wellington,
            queenstown: this.PRICING_LEVEL_KEY.dunedin,
            te_kuiti: this.PRICING_LEVEL_KEY.hamilton,
            // thames: null, // OUT OF ZONE
            tokoroa: this.PRICING_LEVEL_KEY.hamilton,
            whakatane: this.PRICING_LEVEL_KEY.tauranga,
            woodville: this.PRICING_LEVEL_KEY.palmerston_nth,
            bennydale: this.PRICING_LEVEL_KEY.hamilton,
            // coromandel: null, // OUT OF ZONE
            kaitaia: this.PRICING_LEVEL_KEY.whangarei,
            opotiki: this.PRICING_LEVEL_KEY.tauranga,
            // paeroa: null,
            taumarunui: this.PRICING_LEVEL_KEY.hamilton,
            wairoa: this.PRICING_LEVEL_KEY.napier,
            // warkworth: null, // OUT OF ZONE
            turangi: this.PRICING_LEVEL_KEY.rotorua,
        };
        // Create key dict ref to ref minor towns
        var tempMinorTownsKeys = Object.keys(this.MINOR_MAJOR_REL_KEY);
        var minorTownKeys = {};
        tempMinorTownsKeys.forEach(function (key) {
            minorTownKeys[key] = key;
        });
        this.MINOR_TOWNS_KEYS = minorTownKeys;
        // Parse minor towns into user friendly location dict, replacing the _ and the lower case char
        // Init user firendly values
        var tempMinorRelDict = JSON.parse(JSON.stringify(this.MINOR_MAJOR_REL_KEY));
        var tempMinorRelKeys = Object.keys(tempMinorRelDict);
        tempMinorKeys.forEach.bind(this);
        tempMinorRelKeys.forEach(function (minorRelKey) {
            // console.log('minorRelKey', minorRelKey);
            var value = tempMinorRelDict[minorRelKey];
            if (value != null) { // filter out unsupported
                value = value.replace('_', ' ');
                value = setCharAt(value, 0, value.substr(0, 0).toUpperCase());
                _this.USER_FRIENDLY_LOCATION_DICT[minorRelKey] = minorRelKey;
            }
        });
        this.ratingCard = new fr8models__WEBPACK_IMPORTED_MODULE_1__["RatingCard"](this.MAJOR_LOCATIONS, this.MINOR_LOCATIONS, this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION);
        this.locationOptions = this.getLocationOptions();
    };
    QuoteConfig.prototype.setRatingCardData = function (args) {
        if (args) {
            console.log('Loading quote config data', args);
            this.MAJOR_LOCATIONS = args.majorLocations;
            this.MINOR_LOCATIONS = args.minorLocations;
            this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION = args.pricingRateLevelList;
            this.ratingCard = new fr8models__WEBPACK_IMPORTED_MODULE_1__["RatingCard"](this.MAJOR_LOCATIONS, this.MINOR_LOCATIONS, this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION);
            console.log('Done loading quote config data', {
                MAJOR_LOCATION: this.MAJOR_LOCATIONS,
                MINOR_LOCATIONS: this.MINOR_LOCATIONS,
                COST_RATE_PER_TONNE_OR_KG_BY_LOCATION: this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION
            });
        }
    };
    QuoteConfig.prototype.getRatingCard = function () {
        this.ratingCard = this.ratingCard ? this.ratingCard :
            this.ratingCard = new fr8models__WEBPACK_IMPORTED_MODULE_1__["RatingCard"](0, this.MAJOR_LOCATIONS, this.MINOR_LOCATIONS, this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION);
        return this.ratingCard;
    };
    QuoteConfig.prototype.getLocationOptions = function () {
        // Generate dict of locations
        if (!this.USER_FRIENDLY_LOCATION_DICT) {
            return [];
        }
        var locations = JSON.parse(JSON.stringify(this.USER_FRIENDLY_LOCATION_DICT));
        var res = [];
        var locationsKeys = Object.keys(locations);
        locationsKeys.forEach(function (key) {
            res.push({
                userValue: (locations[key].charAt(0).toUpperCase() + locations[key].substr(1)).replace('_', ' '),
                value: key
            });
        });
        // Adhoc pop in auckland
        res.push({
            userValue: 'Auckland',
            value: 'auckland'
        });
        return res;
    };
    QuoteConfig.prototype.getZone = function (minorLocation) {
        var zone = '';
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](this.MINOR_LOCATION_KEY_DICT, function (value, key) {
            value.forEach(function (loc) {
                if (loc === minorLocation) {
                    zone = key;
                }
            });
        });
        return zone;
    };
    return QuoteConfig;
}());



/***/ }),

/***/ "./src/app/dispatch-quote/quote-interface.ts":
/*!***************************************************!*\
  !*** ./src/app/dispatch-quote/quote-interface.ts ***!
  \***************************************************/
/*! exports provided: QuoteInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteInterface", function() { return QuoteInterface; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _quote_price_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-price-level.service */ "./src/app/dispatch-quote/quote-price-level.service.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_4__);





var QuoteInterface = /** @class */ (function () {
    function QuoteInterface(quotePriceLevelService) {
        this.quotePriceLevelService = quotePriceLevelService;
    }
    /**
     * User facing function
     */
    QuoteInterface.prototype.getQuote = function (pricingRules, priceConfig, request, priceRuleLocationConditional) {
        var _this = this;
        if (!pricingRules || pricingRules.length <= 0) {
            console.error('error pricingRules was empty');
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        var isRequestValidResponse = this.isRequestValid(request);
        if (!isRequestValidResponse.success) {
            console.error('error request is missing needed attr', isRequestValidResponse.missingAttr);
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        var isConfigValidResponse = this.isPriceConfigValid(request);
        if (!isConfigValidResponse.success) {
            console.error('error config is missing needed attr', isConfigValidResponse.missingAttr);
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        var totalCost = 0;
        // Order pricing rules
        pricingRules = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](pricingRules);
        var pricingComparators = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](JSON.parse(JSON.stringify(pricingRules)), function (pr) {
            return pr.stepNo < 0;
        })[0];
        pricingRules = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](pricingRules, function (pr) {
            return pr.stepNo > -1;
        });
        var costA = null;
        var costB = null;
        var comparisonSumDone = false;
        var step = 1;
        pricingRules.forEach(function (pricingRule) {
            var costResponse = _this.getCost(pricingRule.type, priceConfig, request);
            if (costResponse.success) {
                if (pricingComparators) { // If comparitors exist
                    console.log('calculating pricing comparitors step: ', step);
                    if (pricingComparators.compareSteps.stepA &&
                        pricingComparators.compareSteps.stepA === step && !costA) {
                        costA = costResponse.cost;
                        console.log('costA: ', costA, step);
                    }
                    else if (pricingComparators.compareSteps.stepB &&
                        pricingComparators.compareSteps.stepB === step && !costB) {
                        costB = costResponse.cost;
                        console.log('costB: ', costA, step);
                    }
                    if (costA && costB && !comparisonSumDone) { // Add to total when you have both
                        totalCost += costA > costB ? costA : costB;
                        console.log('found both costA and costB Summing: ', costA, costB, step);
                        comparisonSumDone = true;
                        // If doesnt fit the comparitor steps then default and is not a comparitor step
                    }
                    else if (pricingComparators.compareSteps.stepA !== step &&
                        pricingComparators.compareSteps.stepB !== step) {
                        totalCost += costResponse.cost;
                        console.log('Ignoring no costCompare match this step: ', costResponse.cost, step);
                    }
                }
                else {
                    totalCost += costResponse.cost;
                }
            }
            else {
                console.error('Could not parse cost for', fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"]);
            }
            step++;
        });
        return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, totalCost);
    };
    /**
     * Main Routing Func for getting cost
     */
    QuoteInterface.prototype.getCost = function (type, config, request) {
        var costResponse;
        if (typeof type === 'undefined') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE, type)) {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        switch (type) {
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.RATING_CARD:
                costResponse = this.getRatingCardCost(config, request.weight, request.mass, request.to, request.from);
                // call the quote service here
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.TONNE_RATE:
                costResponse = this.getTonneRateCost(request.tonne, this.getTonneRate(request.to, config.ratingCard.pricingRateLevelList));
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.MASS_RATE:
                costResponse = this.getMassRateCost(request.mass, this.getMassRate(request.to, config.ratingCard.pricingRateLevelList));
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.PALLET_RATE:
                costResponse = this.getPalletRateCost(request.palletAmount, config.palletRate);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.DRIVER_COST:
                // only for owner driver, only for based amount of package?
                costResponse = this.getDriverCost(request.driverCost);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.UPLIFT_COST:
                costResponse = this.getUpliftCost(request.upliftCost);
                // flat cost
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.FUEL_ADJUST_FEE:
                costResponse = this.getFuelAdustmentFee(request.totalCost, config.fafRate);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.PALLET_COST:
                // rate of rental cost
                costResponse = this.getPalletCost(request.palletAmount, config.palletRate);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.MIN_CHARGE:
                // flat cost
                costResponse = this.getMinCharge(config.minCharge);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.FLAT_CHARGE:
                // flat cost
                costResponse = this.getFlatCost(config.flatCost);
                break;
            case fr8models__WEBPACK_IMPORTED_MODULE_4__["PriceRule"].TYPE.GST:
                costResponse = this.getGst(request.totalCalculatedCost, config.gstRate);
                break;
        }
        if (typeof costResponse === 'undefined') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, undefined);
        }
        else {
            return costResponse;
        }
    };
    QuoteInterface.prototype.getTonneRate = function (location, pricingRateLevelList) {
        location = location.toLowerCase();
        return pricingRateLevelList && pricingRateLevelList[location] ? pricingRateLevelList[location].cost_p_tonne : undefined;
    };
    QuoteInterface.prototype.getMassRate = function (location, pricingRateLevelList) {
        location = location.toLowerCase();
        return pricingRateLevelList && pricingRateLevelList[location] ? pricingRateLevelList[location].cost_p_m3 : undefined;
    };
    QuoteInterface.prototype.getGst = function (totalCost, gstRate) {
        // Get the cost of renting the pallets, pre init rent rate from diff suppliers
        if (totalCost && totalCost && typeof gstRate === 'number' && typeof gstRate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, totalCost * gstRate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getFlatCost = function (flatCost) {
        // Get the cost of renting the pallets, pre init rent rate from diff suppliers
        if (flatCost && typeof flatCost === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, flatCost);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getMinCharge = function (minCharge) {
        // Get the cost of renting the pallets, pre init rent rate from diff suppliers
        if (minCharge && typeof minCharge === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, minCharge);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getPalletCost = function (palletNo, rentRate) {
        // Get the cost of renting the pallets, pre init rent rate from diff suppliers
        if (palletNo && rentRate && typeof palletNo === 'number' && typeof rentRate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, palletNo * rentRate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getFuelAdustmentFee = function (faf, rate) {
        // Have to ensure rate of FAF is of THAT jobs month NOT the CURRENT RATE
        if (faf && rate && typeof faf === 'number' && typeof rate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, faf * rate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getUpliftCost = function (upliftCost) {
        if (upliftCost && typeof upliftCost === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, upliftCost);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getDriverCost = function (driverCost) {
        if (driverCost && typeof driverCost === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, driverCost);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getPalletRateCost = function (palletNo, rate) {
        if (palletNo && rate && typeof palletNo === 'number' && typeof rate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, palletNo * rate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getTonneRateCost = function (tonne, rate) {
        // Have to ensure that number comes in as tonne NOT KG
        if (tonne && rate && typeof tonne === 'number' && typeof rate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, tonne * rate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getMassRateCost = function (mass, rate) {
        if (mass && rate && typeof mass === 'number' && typeof rate === 'number') {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](true, mass * rate);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.getRatingCardCost = function (conf, kgWeight, mass, to, from) {
        if (conf && conf.ratingCard && kgWeight && mass && to && from) {
            var ratingCard = conf.ratingCard;
            var result = void 0;
            if (this.quotePriceLevelService._isMinorLocation(to)) {
                result = this.quotePriceLevelService
                    ._getMinorLocationTotalCost(to, mass, kgWeight);
            }
            else {
                result = this.quotePriceLevelService
                    .calculateCost(kgWeight, mass, to, ratingCard.majorLocations, ratingCard.pricingRateLevelList, ratingCard.minorLocations);
            }
            console.log(result.message);
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](result.success, result.cost);
        }
        else {
            return new fr8models__WEBPACK_IMPORTED_MODULE_4__["QuoteInterfaceResponse"](false, 0);
        }
    };
    QuoteInterface.prototype.isRequestValid = function (request) {
        var isRequestMissingAttr = false;
        var missingAttr = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](request, function (v, k) {
            if (!isRequestMissingAttr) {
                isRequestMissingAttr = typeof v === 'undefined' && !v;
            }
            if (typeof v === 'undefined' && !v) {
                missingAttr.push(k);
            }
        });
        // Returning a simple object
        return {
            success: !isRequestMissingAttr,
            missingAttr: missingAttr
        };
    };
    QuoteInterface.prototype.isPriceConfigValid = function (config) {
        var isConfigMissingAttr = false;
        var missingAttr = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](config, function (v, k) {
            if (!isConfigMissingAttr) {
                isConfigMissingAttr = typeof v === 'undefined' && !v;
            }
            if (typeof v === 'undefined' && !v) {
                missingAttr.push(k);
            }
        });
        // Returning a simple object
        return {
            success: !isConfigMissingAttr,
            missingAttr: missingAttr
        };
    };
    QuoteInterface = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quote_price_level_service__WEBPACK_IMPORTED_MODULE_3__["QuotePriceLevelService"]])
    ], QuoteInterface);
    return QuoteInterface;
}());



/***/ }),

/***/ "./src/app/dispatch-quote/quote-price-level.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/dispatch-quote/quote-price-level.service.ts ***!
  \*************************************************************/
/*! exports provided: QuotePriceLevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotePriceLevelService", function() { return QuotePriceLevelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");



var QuotePriceLevelService = /** @class */ (function () {
    function QuotePriceLevelService() {
        // list of town key ids
        this.MINOR_LOCATION_KEYS = [];
        this.MAJOR_LOCATION_KEYS = [];
        // relationship with minor to major towns
        this.ZONE_REL_MINOR_TOWN_KEYS = [];
    }
    QuotePriceLevelService.prototype.initialize = function (quoteConfig) {
        if (quoteConfig) {
            this.QUOTE_CONSTANTS = quoteConfig;
        }
        else {
            this.QUOTE_CONSTANTS = new _quote_config_service__WEBPACK_IMPORTED_MODULE_2__["QuoteConfig"]();
            this.QUOTE_CONSTANTS.init();
        }
        this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION = this.QUOTE_CONSTANTS.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION;
        this.MINOR_LOCATION_DICT = this.QUOTE_CONSTANTS.MINOR_LOCATIONS;
        this.PRICING_LEVEL = this.QUOTE_CONSTANTS.LOCATIONS; // in QUOTE_CONSTANTS service
        this.MAJOR_LOCATION_DICT = this.QUOTE_CONSTANTS.LOCATIONS; // in QUOTE_CONSTANTS service
        this.MINOR_LOCATION_MAJOR_LOCATION_REL_KEY_DICT = this.QUOTE_CONSTANTS.MINOR_MAJOR_REL_KEY;
        this.MINOR_TOWN_KEYS = this.QUOTE_CONSTANTS.MINOR_TOWNS_KEYS;
        this.USER_FRIENDLY_LOCATION_DICT = this.QUOTE_CONSTANTS.USER_FRIENDLY_LOCATION_DICT;
        // Generate Enums
        var tempKeyList = Object.keys(this.PRICING_LEVEL);
        var tempLevelKey = {};
        tempKeyList.forEach(function (key) {
            tempLevelKey[key] = key;
        });
        this.PRICING_LEVEL_KEY = tempLevelKey;
        this.MINOR_LOCATION_KEYS = Object.keys(this.QUOTE_CONSTANTS.MINOR_LOCATIONS);
        this.MAJOR_LOCATION_KEYS = Object.keys(this.QUOTE_CONSTANTS.MAJOR_LOCATIONS);
        // zone : minor town
        this.ZONE_REL_MINOR_TOWN = this.QUOTE_CONSTANTS.MINOR_LOCATION_KEY_DICT;
        this.ZONE_REL_MINOR_TOWN_KEYS = Object.keys(this.QUOTE_CONSTANTS.MINOR_LOCATION_KEY_DICT);
    };
    /**
     * @returns boolean
     */
    QuotePriceLevelService.prototype._isMinorLocation = function (locationString) {
        if (locationString == null || typeof locationString === 'undefined')
            return false;
        locationString = locationString.toLowerCase();
        var keys = Object.keys(this.MINOR_TOWN_KEYS);
        var res = keys.indexOf(locationString) >= 0;
        return res;
    };
    QuotePriceLevelService.prototype._getAssocMajorLocation = function (locationString) {
        return this.MINOR_LOCATION_MAJOR_LOCATION_REL_KEY_DICT[locationString];
    };
    QuotePriceLevelService.prototype.setRatingCard = function (args) {
        this.PRICING_LEVEL = args.majorLocations;
        this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION = args.pricingRateLevelList;
        this.MINOR_TOWN_KEYS = args.minorLocations;
    };
    /**
     * Charged on weight or cubic, whichever is greater.
     * FAF and GST is additional.
     * For consignments in excess of 3.0m 3 or 1000kg, rate is pro rata.
     * Rural charges may still apply.
     */
    QuotePriceLevelService.prototype._getMinorLocationTotalCost = function (locationString, m3, kg) {
        var result = {
            success: false,
            message: "",
            cost: 0
        };
        // check if is minor location
        if (!this._isMinorLocation(locationString)) {
            result.success = false;
            result.message = "location is not a minor location";
            return result;
        }
        locationString = locationString.toLowerCase();
        // get assoc major location
        var majorLocationString = this._getAssocMajorLocation(locationString);
        if (majorLocationString == null || typeof majorLocationString === 'undefined') {
            result.success = false;
            // currently there are some minor locations which do not explicitly have a major location partner
            // this would stop the costing function here, as there is no value to tag against
            result.message = 'location ' + locationString + ' is not supported, and does not have a major location associated';
            return result;
        }
        // get assoc major location cost
        // get zone
        var zone = '';
        var _loop_1 = function (zoneKey) {
            var minorLocationList = this_1.ZONE_REL_MINOR_TOWN[zoneKey];
            minorLocationList.forEach(function (minorLocation) {
                if (locationString === minorLocation) {
                    zone = zoneKey;
                }
            });
        };
        var this_1 = this;
        for (var zoneKey in this.ZONE_REL_MINOR_TOWN) {
            _loop_1(zoneKey);
        }
        if (zone === '') {
            result.success = false;
            result.message = 'location does not have a zone assoc ' + locationString;
            return result;
        }
        // get additional cost
        var minorCostRes = this.calculateCost(kg, m3, zone, this.PRICING_LEVEL, this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION, this.MINOR_TOWN_KEYS);
        if (!minorCostRes.success) {
            result.message = minorCostRes.message;
            result.cost = 0;
            return result;
        }
        var minorLocationCost = minorCostRes.cost;
        var costRes = this.calculateCost(kg, m3, majorLocationString, this.PRICING_LEVEL, this.COST_RATE_PER_TONNE_OR_KG_BY_LOCATION, this.MINOR_TOWN_KEYS);
        if (costRes.success) {
            var majorLocationCost = costRes.cost;
            var totalCost = majorLocationCost + minorLocationCost;
            result.success = true;
            result.cost = totalCost;
            result.message = costRes.message;
            return result;
        }
        else {
            result.message = costRes.message;
            result.cost = 0;
            return result;
        }
    };
    ;
    // Minor location helper functions
    QuotePriceLevelService.prototype._kgToTonne = function (kg) {
        return kg / 1000;
    };
    QuotePriceLevelService.prototype._dictIncludesKey = function (dict, findKey) {
        var keys = Object.keys(dict);
        var result = false;
        keys.forEach(function (el) {
            if (el === findKey) {
                result = true;
            }
        });
        return result;
    };
    QuotePriceLevelService.prototype._getHighestSetPrice = function (pricingLocation, pricingLevelDict) {
        // console.log('getHi', pricingLevelDict);
        var setPricings = pricingLevelDict[pricingLocation];
        var highestPrice = 0;
        var highestSet;
        if (setPricings.length <= 0) {
            return {
                success: false,
                price: 0,
                mass: 0,
                weight: 0,
            };
        }
        setPricings.forEach(function (priceObject) {
            // ensure get the highest cost from the PRICING_LEVEL dict
            if (highestPrice <= priceObject.cost) {
                highestPrice = priceObject.cost;
                highestSet = priceObject;
            }
        });
        if (highestPrice > 0) {
            return {
                success: true,
                price: highestPrice,
                mass: highestSet.m3,
                weight: highestSet.tonne
            };
        }
        else {
            return {
                success: false,
                price: highestPrice,
                mass: highestSet.m3,
                weight: highestSet.tonne
            };
        }
    };
    /**
     * @param {*} weight tonnes
     * @param {*} location location string
     */
    QuotePriceLevelService.prototype._getWeightPricingLevel = function (weight, location, pricingLevelDict) {
        // console.log('getHPL', pricingLevelDict);
        // Get highest price level for comparison
        var highestSetObj = this._getHighestSetPrice(location, pricingLevelDict);
        if (!highestSetObj.success) {
            return {
                isFoundPricingLevel: false,
                isGreaterThanMaxPricing: false,
                pricingLevel: {},
                success: false
            };
        }
        else if (highestSetObj.weight < weight) {
            return {
                isFoundPricingLevel: false,
                isGreaterThanMaxPricing: true,
                pricingLevel: {},
                success: true
            };
        }
        var isFoundPricingLevel = false;
        var pricingLevel = {};
        var isGreaterThanMaxPricing = false;
        // If the is not greater than max pricing for weight
        pricingLevelDict[location].forEach(function (item) {
            if (weight <= item.tonne && !isFoundPricingLevel) {
                pricingLevel = item;
                isFoundPricingLevel = true;
            }
        });
        return {
            isFoundPricingLevel: isFoundPricingLevel,
            isGreaterThanMaxPricing: isGreaterThanMaxPricing,
            pricingLevel: pricingLevel,
            success: true,
        };
    };
    ;
    /**
     * @param {*} mass m3
     * @param {*} location location string
     */
    QuotePriceLevelService.prototype._getMassPricingLevel = function (mass, location, pricingLevelDict) {
        // console.log('getMPL', pricingLevelDict);
        var idx = 0;
        var isFoundPricingLevel = false;
        var pricingLevel = {};
        // Get highest price level for comparison
        var highestSetObj = this._getHighestSetPrice(location, pricingLevelDict);
        if (!highestSetObj.success) {
            return {
                success: false,
                pricingLevel: pricingLevel,
                isFoundPricingLevel: isFoundPricingLevel,
                isGreaterThanMaxPricing: false
            };
        }
        else if (highestSetObj.mass < mass) {
            return {
                success: true,
                pricingLevel: pricingLevel,
                isFoundPricingLevel: isFoundPricingLevel,
                isGreaterThanMaxPricing: true
            };
        }
        // If isnt over max pricing for mass
        pricingLevelDict[location].forEach(function (item) {
            if (mass <= item.m3 && !isFoundPricingLevel) {
                pricingLevel = item;
                isFoundPricingLevel = true;
            }
        });
        return {
            success: true,
            pricingLevel: pricingLevel,
            isFoundPricingLevel: isFoundPricingLevel,
            isGreaterThanMaxPricing: false
        };
    };
    ;
    /**
     * Compares Price Level object and outputs the cost which is greater
     */
    QuotePriceLevelService.prototype._getHigherMassWeightCost = function (weightPL, massPL) {
        var weightCost = weightPL.cost;
        var massCost = massPL.cost;
        if (typeof weightCost === 'undefined' && typeof massCost !== 'undefined') {
            return massCost;
        }
        else if (typeof massCost === 'undefined' && typeof weightCost !== 'undefined') {
            return weightCost;
        }
        else if (typeof weightCost === 'undefined' && typeof massCost === 'undefined') {
            return -1;
        }
        else {
            return weightCost > massCost ? weightCost : massCost;
        }
    };
    /**
     * @param {*} weight kg
     * @param {*} mass m3
     * @param {*} location location string
     * @param {*} pricingLevelDict PRICING_LEVEL
     * @param {*} maxCostDict COST_RATE_PER_TONNE_OR_KG_BY_LOCATION
     * @param {*} minorLocationDict MINOR_TOWN_KEYS
     */
    QuotePriceLevelService.prototype.calculateCost = function (weight, mass, locationString, pricingLevelDict, maxCostDict, minorLocationDict) {
        if (weight == null) {
            return {
                message: 'weight is null',
                success: false,
                cost: 0
            };
        }
        if (mass == null) {
            return {
                message: 'mass is null',
                success: false,
                cost: 0
            };
        }
        if (locationString == null) {
            return {
                message: 'location string is null',
                success: false,
                cost: 0
            };
        }
        if (pricingLevelDict == null) {
            return {
                message: 'pricing level dict is null',
                success: false,
                cost: 0
            };
        }
        if (maxCostDict == null) {
            return {
                message: 'max cost dict is null',
                success: false,
                cost: 0
            };
        }
        if (minorLocationDict == null) {
            return {
                message: 'minor location is dict is null',
                success: false,
                cost: 0
            };
        }
        try {
            var cost = 0;
            var message = "";
            // Exists in cost rate location object
            var parsingResult = this.parseLocation(locationString, pricingLevelDict, minorLocationDict);
            if (!parsingResult.success) {
                return {
                    message: 'location ' + locationString + ' could not be parsed',
                    success: false,
                    cost: 0
                };
            }
            locationString = parsingResult.location;
            if (!this._dictIncludesKey(pricingLevelDict, locationString) || !parsingResult.success) {
                return {
                    message: 'location ' + locationString + ' cannot be found',
                    success: false,
                    cost: 0
                };
            }
            // convert weight to tonne
            weight = this._kgToTonne(weight);
            // calc next closest pricing level
            var massResult = this._getMassPricingLevel(mass, locationString, pricingLevelDict);
            var weightResult = this._getWeightPricingLevel(weight, locationString, pricingLevelDict);
            // calc over max priced level
            var highQuantityWeightCost = maxCostDict[locationString].cost_p_tonne * weight;
            var highQuantityMassCost = maxCostDict[locationString].cost_p_m3 * mass;
            var highQuantityCost = highQuantityWeightCost > highQuantityMassCost ? highQuantityWeightCost : highQuantityMassCost;
            // get message results
            var stringMassResult = massResult != null ? JSON.stringify(massResult) : 'null';
            var stringWeightResult = weightResult != null ? JSON.stringify(weightResult) : 'null';
            // calc on pricing level
            if (weightResult.pricingLevel && massResult.pricingLevel) {
                cost = this._getHigherMassWeightCost(weightResult.pricingLevel, massResult.pricingLevel);
                if (cost < 0 && !(massResult.isGreaterThanMaxPricing || weightResult.isGreaterThanMaxPricing)) {
                    return {
                        message: 'pricing level for ' + weight + 'T and ' + mass +
                            'm^3 could not be found and cost is 0. Mass result' + stringMassResult + ' n\ ' +
                            ' weight Result' + stringWeightResult,
                        success: false,
                        cost: 0
                    };
                }
                message = 'pricing level for ' + weight + 'T and ' + mass +
                    'm^3 got LOWER THAN MAX COST. Mass result' + stringMassResult + ' n\ ' +
                    ' weight Result' + stringWeightResult;
            }
            else if ((!massResult.isFoundPricingLevel || !weightResult.isFoundPricingLevel) && !(massResult.isGreaterThanMaxPricing || weightResult.isGreaterThanMaxPricing)) {
                return {
                    message: 'pricing level for ' + weight + 'T and ' + mass +
                        'm^3 could not be found and the max pricing rates could not be applied. Mass result' + stringMassResult + ' n\ ' +
                        ' weight Result' + stringWeightResult,
                    success: false,
                    cost: 0
                };
            }
            else {
                return {
                    message: 'pricing level ' + weight + ' could not be calculated',
                    success: false,
                    cost: 0
                };
            }
            // Try to charge the highest cost
            if (highQuantityCost > cost && this._canUseMaxPricing(massResult, weightResult)) {
                cost = highQuantityCost;
                message = 'pricing level for ' + weight + 'T and ' + mass +
                    'm^3 got MAX COST. Mass result' + stringMassResult + ' n\ ' +
                    ' weight Result' + stringWeightResult;
            }
            return {
                message: message,
                success: true,
                cost: cost
            };
        }
        catch (error) {
            console.error('Could Not get quote', error);
        }
    };
    ;
    /********************************************************************
     *                         Helper Functions
     ********************************************************************/
    QuotePriceLevelService.prototype._canUseMaxPricing = function (massResult, weightResult) {
        return (!massResult.isFoundPricingLevel || !weightResult.isFoundPricingLevel) && (massResult.isGreaterThanMaxPricing || weightResult.isGreaterThanMaxPricing);
    };
    ;
    /**
     * @returns {Array} list of locations
     */
    QuotePriceLevelService.prototype.getLocations = function () {
        // Generate dict of locations
        if (!this.USER_FRIENDLY_LOCATION_DICT)
            return [];
        var locations = JSON.parse(JSON.stringify(this.USER_FRIENDLY_LOCATION_DICT));
        var res = [];
        var locationsKeys = Object.keys(locations);
        locationsKeys.forEach(function (key) {
            res.push({
                userValue: locations[key],
                value: key
            });
        });
        res.push({
            userValue: 'Auckland',
            value: 'auckland'
        });
        return res;
    };
    ;
    // This will not handle two valid locations, should take the first valid location
    QuotePriceLevelService.prototype.parseLocation = function (userInput, pricingLevelDict, minorLocationDict) {
        var parsedLocation = '';
        if (userInput == null) {
            return {
                success: false,
                location: userInput
            };
        }
        userInput = userInput.toLowerCase();
        // loop through all the locations
        Object.keys(pricingLevelDict).forEach(function (locationString) {
            if (userInput.indexOf(locationString) != -1) {
                parsedLocation = locationString;
            }
        });
        // Already found no need to check minor location
        Object.keys(minorLocationDict).forEach(function (locationString) {
            if (userInput.indexOf(locationString) != -1) {
                parsedLocation = locationString;
            }
        });
        // check for if includes, then replace item with curr val
        if (parsedLocation === '') {
            return {
                success: false,
                location: ''
            };
        }
        else {
            return {
                success: true,
                location: parsedLocation
            };
        }
    };
    ;
    QuotePriceLevelService.prototype.getUserResultMessage = function (isSuccess) {
        var message = '';
        if (isSuccess) {
            message = 'This Quote has been sent to your email';
        }
        else {
            message = 'Please check the form has been completed correctly';
        }
        return message;
    };
    ;
    QuotePriceLevelService.prototype.predictLocation = function (chars, locationsDict, userFriendlyLocationDict) {
        var foundLocations = [];
        var locationKeys = Object.keys(locationsDict);
        locationKeys.forEach(function (locationKey) {
            var res = locationKey.indexOf(chars) > -1;
            if (res) {
                var location_1 = userFriendlyLocationDict[locationKey];
                foundLocations.push({
                    userValue: location_1,
                    value: locationKey
                });
            }
        });
        if (foundLocations.length > 0) {
            foundLocations = foundLocations.sort();
            return {
                success: true,
                locations: foundLocations
            };
        }
        else {
            return {
                success: false,
                locations: []
            };
        }
    };
    QuotePriceLevelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QuotePriceLevelService);
    return QuotePriceLevelService;
}());



/***/ }),

/***/ "./src/app/dispatch-upload/dispatch-upload.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dispatch-upload/dispatch-upload.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BhdGNoLXVwbG9hZC9kaXNwYXRjaC11cGxvYWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dispatch-upload/dispatch-upload.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dispatch-upload/dispatch-upload.component.ts ***!
  \**************************************************************/
/*! exports provided: DispatchUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchUploadComponent", function() { return DispatchUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");




var DispatchUploadComponent = /** @class */ (function () {
    function DispatchUploadComponent(dispatchProvider, spinner) {
        this.spinner = spinner;
        this.dispatchProvider = dispatchProvider;
    }
    DispatchUploadComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var reader = new FileReader();
            // have to bind, else 'this' will not be passed to the cb
            reader.onload = this.onLoad.bind(this);
            reader.readAsText(event.target.files[0]);
            this.spinner.show();
        }
    };
    DispatchUploadComponent.prototype.onLoad = function (event) {
        var csvUploadString = event.target.result;
        document.getElementById('fileContent').textContent = csvUploadString;
        // take text and push into dispatch service
        this.dispatchProvider.setCsvUploadString(csvUploadString);
        this.dispatchProvider.setBatchRequest(csvUploadString);
        this.spinner.hide();
    };
    DispatchUploadComponent.prototype.upload = function () {
        var _this = this;
        this.spinner.show();
        this.dispatchProvider.uploadCsvString()
            .then(function () {
            _this.showError = false;
            _this.showSuccess = true;
            _this.spinner.hide();
        })
            .catch(function () {
            _this.showError = true;
            _this.showSuccess = false;
            _this.spinner.hide();
        });
    };
    DispatchUploadComponent.prototype.ngOnInit = function () {
        this.spinner.hide.bind(this);
        this.showError = false;
        this.showSuccess = false;
    };
    DispatchUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dispatch-upload-component',
            template: __webpack_require__(/*! raw-loader!./dispatch-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/dispatch-upload/dispatch-upload.component.html"),
            styles: [__webpack_require__(/*! ./dispatch-upload.component.css */ "./src/app/dispatch-upload/dispatch-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_provider__WEBPACK_IMPORTED_MODULE_3__["DispatchProvider"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], DispatchUploadComponent);
    return DispatchUploadComponent;
}());



/***/ }),

/***/ "./src/app/dispatch-uploader.service.ts":
/*!**********************************************!*\
  !*** ./src/app/dispatch-uploader.service.ts ***!
  \**********************************************/
/*! exports provided: DispatchUploader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchUploader", function() { return DispatchUploader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dispatch_gateway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch.gateway */ "./src/app/dispatch.gateway.ts");





var DispatchUploader = /** @class */ (function () {
    function DispatchUploader(http, dg) {
        this.http = http;
        this.keysList = [
            'flags', 'Memo', 'Docket', 'Container', 'Job Type', 'Status', 'Current Details',
            'Manifest (Current)', 'Order Ref', 'Pickup Ref', 'Delivery Ref', 'Customer',
            'Pickup', 'From', 'Deliver', 'To', 'Vehicle', 'Shift', 'Goods', 'Goods Type', 'Required Pickup',
            'PUP TZ', 'Required Delivery', 'DEL TZ', 'Next Milestone', 'Quantity', 'Weight',
            'Cubic', 'Booked Date', 'Picked up', 'Packed / Unpacked', 'Delivered', 'Last Change',
            'Delivered To', 'H/Plts', 'Chg', 'Ovride', 'Invoice', 'ICOS Ref', 'ICOS BRef',
            'I/E/M', 'Container Type', 'Container Size', 'MT/F?', 'DGs', 'Vessel',
            'PAK/UPK', 'PAK/UPK Area', 'Shipping Company', 'Voyage', 'Container Release',
            'Container Pin', 'Container Random', 'Slot Date', 'Slot Reference', 'VBS Empty',
            'VBS Full', 'Commodity', 'Scheduled Priority', 'Booked By', 'Measured Weight',
            'Lifts', 'Container Doors', 'Now At', 'Going To', 'Required PAK/UPK', 'PAK/UPK TZ',
            'Cont. Load Type', 'Seal Number', 'Pickup Depot', 'Current Depot', 'Delivery Depot',
            'Next Depot', 'IsExport', 'ECERT'
        ];
        this.requestBatch = [];
        this.requestUploadStringBatch = [];
        this.dg = dg;
    }
    DispatchUploader.prototype.setBatchRequest = function (csv) {
        this.requestBatch = [];
        var batchTemp = [];
        // parse out the len of the keys and split by ,
        csv = csv.replace(/\n/g, ',');
        var csvStringList = csv.split(',');
        var keyListLen = this.keysList.length;
        //csvStringList = csvStringList.splice(keyListLen, csvStringList.length - 1);
        var i;
        var j;
        var chunk = keyListLen - 1;
        this.requestBatch = this.chunks(csvStringList, keyListLen);
        // for (i = 0, j = csvStringList.length; i < j; i += chunk) {
        //     batchTemp = csvStringList.slice(i, i + chunk - 1);
        //     // deep copy into into array
        //     this.requestBatch.push(Object.assign({}, batchTemp));
        // }
        console.log('RequestBatch', this.requestBatch);
    };
    DispatchUploader.prototype.chunks = function (array, size) {
        var tempArray = [array];
        var results = [];
        while (array.length) {
            results.push(array.splice(0, size));
        }
        return results;
    };
    DispatchUploader.prototype.setBatchStringBodyRequest = function (requestBatch) {
        requestBatch.forEach(function (batch) {
        });
    };
    DispatchUploader.prototype.setCsvUploadString = function (csv) {
        this.csv = csv;
        this.csvB64 = this.base64CsvString(csv);
        console.log('uploader set csv and base64 values', this.csv, this.csvB64);
    };
    DispatchUploader.prototype.base64CsvString = function (csv) {
        var b64Csv = '';
        b64Csv = js_base64__WEBPACK_IMPORTED_MODULE_3__["Base64"].encode(csv);
        return b64Csv;
    };
    DispatchUploader.prototype.uploadCsvString = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.dg.csvBatchUpdateDispatch(_this.csvB64)
                .then(function () {
                res();
            })
                .catch(function (err) {
                rej(err);
            });
        });
    };
    DispatchUploader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _dispatch_gateway__WEBPACK_IMPORTED_MODULE_4__["DispatchGateway"]])
    ], DispatchUploader);
    return DispatchUploader;
}());



/***/ }),

/***/ "./src/app/dispatch.gateway.ts":
/*!*************************************!*\
  !*** ./src/app/dispatch.gateway.ts ***!
  \*************************************/
/*! exports provided: DispatchGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchGateway", function() { return DispatchGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");







var DispatchGateway = /** @class */ (function () {
    function DispatchGateway(http, ls) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/dispatch' : 'http://localhost/dispatch';
        this.ls = ls;
    }
    DispatchGateway.prototype.setHeaders = function () {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: this.ls.getToken()
            })
        };
    };
    DispatchGateway.prototype.saveDispatch = function (dispatchRecord) {
        console.log('Saving ', dispatchRecord);
        return new Promise(function (res, rej) {
            // dummy code return dummy list you dummy
            res(new fr8models__WEBPACK_IMPORTED_MODULE_3__["DispatchRecord"]({}));
        });
    };
    DispatchGateway.prototype.getRecentRecords = function () {
        var _this = this;
        console.log('Getting records...');
        this.setHeaders();
        return new Promise(function (res, rej) {
            _this.http.get("" + _this.uri, _this.httpOptions)
                .subscribe(function (hres) {
                console.log('Done', hres);
                var dispatchList = [];
                hres.forEach(function (item) {
                    dispatchList.push(new fr8models__WEBPACK_IMPORTED_MODULE_3__["DispatchRecord"](item));
                });
                console.log('Done list jobs', dispatchList);
                res(dispatchList);
            });
        });
    };
    DispatchGateway.prototype.getDispatch = function () {
        return this.http.get("" + this.uri);
    };
    DispatchGateway.prototype.editDispatch = function (id) {
        return this.http.get(this.uri + "/edit/" + id);
    };
    DispatchGateway.prototype.updateDispatch = function (ProductName, ProductDescription, ProductPrice, id) {
        var obj = {
            ProductName: ProductName,
            ProductDescription: ProductDescription,
            ProductPrice: ProductPrice
        };
        this.http.post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Update Complete'); });
    };
    DispatchGateway.prototype.csvBatchUpdateDispatch = function (csvDispatchString) {
        var _this = this;
        var request = {
            data: csvDispatchString
        };
        console.log('Saving ', request);
        return new Promise(function (res, rej) {
            _this.http.post(_this.uri + "/import", request, _this.httpOptions)
                .subscribe(function (hres) {
                console.log('Done', hres);
                res(true);
            });
        });
    };
    DispatchGateway.prototype.deleteDispatch = function (id) {
        return this.http.get(this.uri + "/delete/" + id);
    };
    DispatchGateway = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], DispatchGateway);
    return DispatchGateway;
}());



/***/ }),

/***/ "./src/app/dispatch.provider.ts":
/*!**************************************!*\
  !*** ./src/app/dispatch.provider.ts ***!
  \**************************************/
/*! exports provided: DispatchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchProvider", function() { return DispatchProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _dispatch_uploader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatch-uploader.service */ "./src/app/dispatch-uploader.service.ts");
/* harmony import */ var _dispatch_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch.service */ "./src/app/dispatch.service.ts");
/* harmony import */ var _dispatch_quote_dispatch_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatch-quote/dispatch-quote.service */ "./src/app/dispatch-quote/dispatch-quote.service.ts");
/* harmony import */ var _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dispatch-quote/quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");
/* harmony import */ var _rating_card_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rating-card.service */ "./src/app/rating-card.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./location.service */ "./src/app/location.service.ts");









var DispatchProvider = /** @class */ (function () {
    function DispatchProvider(loginService, dispatchUploader, dispatchService, dispatchQuoteService, quoteConfig, ratingCardService, locationService) {
        this.loginService = loginService;
        this.dispatchUploader = dispatchUploader;
        this.dispatchService = dispatchService;
        this.dispatchQuoteService = dispatchQuoteService;
        this.quoteConfig = quoteConfig;
        this.ratingCardService = ratingCardService;
        this.locationService = locationService;
    }
    DispatchProvider.prototype.login = function (username, password) {
        return this.loginService.login(username, password);
    };
    DispatchProvider.prototype.setCsvUploadString = function (csv) {
        this.dispatchUploader.setCsvUploadString(csv);
    };
    DispatchProvider.prototype.setBatchRequest = function (csv) {
        this.dispatchUploader.setBatchRequest(csv);
    };
    DispatchProvider.prototype.uploadCsvString = function () {
        return this.dispatchUploader.uploadCsvString();
    };
    DispatchProvider.prototype.addDispatch = function (dispatchRecord) {
        return this.dispatchService.addDispatch(dispatchRecord);
    };
    DispatchProvider.prototype.listDispatch = function () {
        return this.dispatchService.listDispatch();
    };
    DispatchProvider.prototype.getLocalDispatch = function () {
        return this.dispatchService.getLocalDispatch();
    };
    // Quote Service
    DispatchProvider.prototype.initQuoteConfig = function () {
        return this.dispatchQuoteService.initQuoteConfig();
    };
    DispatchProvider.prototype.getPriceRuleList = function () {
        return this.dispatchQuoteService.getPriceRuleSetList();
    };
    DispatchProvider.prototype.getPriceRuleConfig = function (id) {
        return this.dispatchQuoteService.getPriceRuleConfigById(id);
    };
    DispatchProvider.prototype.listPriceRules = function () {
        return this.dispatchQuoteService.listPriceRules();
    };
    DispatchProvider.prototype.savePriceRuleSet = function (priceRuleSet) {
        return this.dispatchQuoteService.savePriceRuleSet(priceRuleSet);
    };
    DispatchProvider.prototype.removePriceRuleSet = function (id) {
        return this.dispatchQuoteService.removePriceRuleConfig(id);
    };
    DispatchProvider.prototype.getRatingCardQuote = function (to, from, weight, mass) {
        return this.dispatchQuoteService.getRatingCardQuote(to, from, weight, mass);
    };
    DispatchProvider.prototype.getLocations = function () {
        return this.dispatchQuoteService.getLocations();
    };
    DispatchProvider.prototype.getLocationOptions = function () {
        return this.locationService.getLocationOptions();
    };
    DispatchProvider.prototype.searchQuotes = function (id) {
        return this.dispatchQuoteService.queryQuotesById(id);
    };
    DispatchProvider.prototype.listQuotes = function () {
        return this.dispatchQuoteService.listQuotes();
    };
    DispatchProvider.prototype.getQuotes = function () {
        return this.dispatchQuoteService.getQuotes();
    };
    DispatchProvider.prototype.getQuote = function (id) {
        return this.dispatchQuoteService.getQuote(id);
    };
    DispatchProvider.prototype.saveQuote = function (id, quote, isEdit) {
        return isEdit ? this.dispatchQuoteService.updateQuote(id, quote) : this.dispatchQuoteService.saveQuote(quote);
    };
    DispatchProvider.prototype.listRatingCard = function () {
        return this.ratingCardService.listRatingCard();
    };
    DispatchProvider.prototype.getLocationRatesObj = function (location, ratingCard) {
        return this.ratingCardService.getLocationRatesObj(location, ratingCard);
    };
    DispatchProvider.prototype.getRatingCards = function () {
        return this.ratingCardService.getRatingCards();
    };
    DispatchProvider.prototype.getRatingCard = function (id) {
        return this.ratingCardService.getRatingCard(id);
    };
    DispatchProvider.prototype.getDefaultRatingCard = function () {
        return this.ratingCardService.getDefaultRatingCard();
    };
    DispatchProvider.prototype.saveRatingCard = function (companyId, ratingCard) {
        return this.ratingCardService.saveRatingCardWithModel(companyId, ratingCard);
    };
    DispatchProvider.prototype.updateRatingCard = function (ratingCard) {
        return this.ratingCardService.updateCompanyWithModel(ratingCard);
    };
    DispatchProvider.prototype.deleteRatingCard = function (id) {
        return this.ratingCardService.deleteRatingCard(id);
    };
    DispatchProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _dispatch_uploader_service__WEBPACK_IMPORTED_MODULE_3__["DispatchUploader"],
            _dispatch_service__WEBPACK_IMPORTED_MODULE_4__["DispatchService"], _dispatch_quote_dispatch_quote_service__WEBPACK_IMPORTED_MODULE_5__["DispatchQuoteService"],
            _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_6__["QuoteConfig"], _rating_card_service__WEBPACK_IMPORTED_MODULE_7__["RatingCardService"],
            _location_service__WEBPACK_IMPORTED_MODULE_8__["LocationService"]])
    ], DispatchProvider);
    return DispatchProvider;
}());



/***/ }),

/***/ "./src/app/dispatch.service.ts":
/*!*************************************!*\
  !*** ./src/app/dispatch.service.ts ***!
  \*************************************/
/*! exports provided: DispatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchService", function() { return DispatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dispatch_gateway__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch.gateway */ "./src/app/dispatch.gateway.ts");





var DispatchService = /** @class */ (function () {
    function DispatchService(http, dg) {
        var _this = this;
        this.http = http;
        this.dg = dg;
        dg.getRecentRecords()
            .then(function (records) {
            _this.dispatchRecords = records;
        });
    }
    DispatchService.prototype.addDispatch = function (dispatchRecord) {
        var _this = this;
        return this.saveDispatch(dispatchRecord)
            .then(function (record) {
            _this.dispatchRecords.push(dispatchRecord);
            console.log(_this.dispatchRecords);
        }).catch(function (e) {
            console.error('Could not add dispatch record', dispatchRecord, e);
        });
    };
    DispatchService.prototype.saveDispatch = function (dispatchRecord) {
        return this.dg.saveDispatch(dispatchRecord);
    };
    DispatchService.prototype.getDispatch = function () {
        return new fr8models__WEBPACK_IMPORTED_MODULE_3__["DispatchRecord"]({});
    };
    DispatchService.prototype.getLocalDispatch = function () {
        return this.dispatchRecords;
    };
    DispatchService.prototype.listDispatch = function () {
        var _this = this;
        return this.dg.getRecentRecords()
            .then(function (records) {
            _this.dispatchRecords = records;
        });
    };
    DispatchService.prototype.updateDispatch = function (ProductName, ProductDescription, ProductPrice, id) {
    };
    DispatchService.prototype.deleteDispatch = function (id) {
        return 1; // return dispatch id
    };
    DispatchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _dispatch_gateway__WEBPACK_IMPORTED_MODULE_4__["DispatchGateway"]])
    ], DispatchService);
    return DispatchService;
}());



/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dispatch-quote/quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");




var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.qc = new _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_3__["QuoteConfig"]();
        this.qc.init();
    }
    LocationService.prototype.addLocation = function (location) { };
    LocationService.prototype.saveLocation = function (location) {
        return Promise.resolve();
    };
    LocationService.prototype.getLocationOptions = function () {
        return this.locations ? this.locations : this.qc.locationOptions;
    };
    LocationService.prototype.listLocation = function () {
        return Promise.resolve();
    };
    LocationService.prototype.updateLocation = function (id) {
    };
    LocationService.prototype.deleteLocation = function (id) {
        return 1;
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_6__);







var LoginService = /** @class */ (function () {
    function LoginService(http, router, storage) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/auth/login';
        this.isLoggedIn = false;
        this.userInfo = new fr8models__WEBPACK_IMPORTED_MODULE_6__["LoginResponse"]();
        this.token = '';
        this.permissions = {};
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changedObj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginService.prototype.getToken = function () {
        this.token = this.storage.getItem(this.storage.KEY.LOGIN_TOKEN) ? this.storage.getItem(this.storage.KEY.LOGIN_TOKEN) : this.token;
        return this.token;
    };
    LoginService.prototype.getUserInfo = function () {
        this.userInfo = this.storage.getItem(this.storage.KEY.USER_INFO) ? JSON.parse(this.storage.getItem(this.storage.KEY.USER_INFO))
            : this.userInfo;
        return this.userInfo;
    };
    LoginService.prototype.getUserCompanyId = function () {
        var userInfo = this.getUserInfo();
        var id = userInfo && userInfo.company.id ? userInfo.company.id : null;
        console.log('user company id', id);
        return id;
    };
    LoginService.prototype.getPermissions = function () {
        this.permissions = {
            login: true,
            dispatch: false,
            quote: true,
            user: false,
            company: false,
            uploadDispatch: false,
            ratingCard: false,
            priceRule: false
        };
        // TODO: Integrate with the real permissions later
        if (this.isParentCompanyUser()) {
            this.permissions = {
                login: true,
                dispatch: true,
                quote: true,
                user: true,
                company: true,
                uploadDispatch: true,
                ratingCard: true,
                priceRule: true
            };
        }
        return this.permissions;
    };
    LoginService.prototype.isParentCompanyUser = function () {
        var userInfo = this.getUserInfo();
        var isParentUser = userInfo && userInfo.company ? !userInfo.company.parentId : false;
        console.log('isParentCompanyUser', isParentUser);
        return isParentUser;
    };
    LoginService.prototype.initToken = function () {
        this.token = this.storage.getItem(this.storage.KEY.LOGIN_TOKEN) ? this.storage.getItem(this.storage.KEY.LOGIN_TOKEN) : '';
        return this.token.length > 0;
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        console.log(username, password);
        var obj = {
            username: username,
            password: password
        };
        console.log(this.uri, _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]);
        return new Promise(function (res, rej) {
            return _this.http.post(_this.uri, obj)
                .subscribe(function (data) {
                console.log('data', data);
                _this.userInfo = data;
                _this.token = data.token;
                _this.isLoggedIn = true;
                _this.changed.emit(_this.isLoggedIn);
                _this.changedObj.emit(_this.userInfo);
                res();
                _this.storage.setItem(_this.storage.KEY.LOGIN_TOKEN, _this.token);
                _this.storage.setItem(_this.storage.KEY.USER_INFO, JSON.stringify(_this.userInfo));
                _this.router.navigate(['dispatch/quote']);
            }, function (error) {
                // Still allow move to next screen until api
                console.error('error', error);
                _this.isLoggedIn = false;
                _this.changed.emit(_this.isLoggedIn);
                rej(error);
            });
        });
    };
    LoginService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.changed.emit(this.isLoggedIn);
        this.router.navigate(['login']);
        this.storage.setItem(this.storage.KEY.LOGIN_TOKEN, '');
        this.storage.setItem(this.storage.KEY.USER_INFO, '');
        this.userInfo = new fr8models__WEBPACK_IMPORTED_MODULE_6__["LoginResponse"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginService.prototype, "changed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginService.prototype, "changedObj", void 0);
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, dp, spinner) {
        this.fb = fb;
        this.dp = dp;
        this.spinner = spinner;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.spinner.show();
        this.dp.login(username, password)
            .then(function () {
            _this.spinner.hide();
            _this.showError = false;
        }, function (err) {
            _this.spinner.hide();
            _this.showError = true;
        }).catch(function () {
            _this.spinner.hide();
            _this.showError = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.spinner.hide.bind(this);
        this.showError = false;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _dispatch_provider__WEBPACK_IMPORTED_MODULE_4__["DispatchProvider"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/notify-fail-toastr.ts":
/*!***************************************!*\
  !*** ./src/app/notify-fail-toastr.ts ***!
  \***************************************/
/*! exports provided: NotyfToastFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotyfToastFail", function() { return NotyfToastFail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var NotyfToastFail = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotyfToastFail, _super);
    function NotyfToastFail(toastrService, toastPackage) {
        var _this = _super.call(this, toastrService, toastPackage) || this;
        _this.toastrService = toastrService;
        _this.toastPackage = toastPackage;
        // constructor is only necessary when not using AoT
        _this.isSuccess = false;
        return _this;
    }
    NotyfToastFail = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'notyf-toast-component',
            template: "\n    <div class=\"notyf__toast notyf__toast--success notyf__toast\">\n      <div class=\"notyf__wrapper\">\n        <div class=\"notyf__icon\">\n          <i [hidden]=\"!isSuccess\" class=\"notyf__icon--success\" style=\"color: rgb(61, 199, 99);\"></i>\n          <i [hidden]=\"isSuccess\" class=\"notyf__icon--error\" style=\"color: #cc0000;\"></i>\n        </div>\n        <div class=\"notyf__message\">{{ title }} {{ message }}</div>\n      </div>\n      <div [hidden]=\"!isSuccess\" class=\"notyf__ripple\" style=\"background-color: rgb(61, 199, 99);\"></div>\n      <div [hidden]=\"isSuccess\" class=\"notyf__ripple\" style=\"background-color: #cc0000;\"></div>\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            bottom: '-15px',
                            'max-height': 0,
                            'max-width': 0,
                            'margin-top': 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0.8,
                            bottom: '-3px',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            bottom: '0',
                            'max-height': '200px',
                            'margin-top': '12px',
                            'max-width': '400px',
                        }),
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        bottom: '0',
                        'max-height': '200px',
                        'margin-top': '12px',
                        'max-width': '400px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateY(25%)'
                        }),
                    ]))),
                ]),
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastPackage"]])
    ], NotyfToastFail);
    return NotyfToastFail;
}(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["Toast"]));



/***/ }),

/***/ "./src/app/notify-success-toastr.ts":
/*!******************************************!*\
  !*** ./src/app/notify-success-toastr.ts ***!
  \******************************************/
/*! exports provided: NotyfToastSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotyfToastSuccess", function() { return NotyfToastSuccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var NotyfToastSuccess = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotyfToastSuccess, _super);
    function NotyfToastSuccess(toastrService, toastPackage) {
        var _this = _super.call(this, toastrService, toastPackage) || this;
        _this.toastrService = toastrService;
        _this.toastPackage = toastPackage;
        // constructor is only necessary when not using AoT
        _this.isSuccess = true;
        return _this;
    }
    NotyfToastSuccess = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'notyf-toast-component',
            template: "\n    <div class=\"notyf__toast notyf__toast--success notyf__toast\">\n      <div class=\"notyf__wrapper\">\n        <div class=\"notyf__icon\">\n          <i [hidden]=\"!isSuccess\" class=\"notyf__icon--success\" style=\"color: rgb(61, 199, 99);\"></i>\n          <i [hidden]=\"isSuccess\" class=\"notyf__icon--error\" style=\"color: #cc0000;\"></i>\n        </div>\n        <div class=\"notyf__message\">{{ title }} {{ message }}</div>\n      </div>\n      <div [hidden]=\"!isSuccess\" class=\"notyf__ripple\" style=\"background-color: rgb(61, 199, 99);\"></div>\n      <div [hidden]=\"isSuccess\" class=\"notyf__ripple\" style=\"background-color: #cc0000;\"></div>\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            bottom: '-15px',
                            'max-height': 0,
                            'max-width': 0,
                            'margin-top': 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0.8,
                            bottom: '-3px',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            bottom: '0',
                            'max-height': '200px',
                            'margin-top': '12px',
                            'max-width': '400px',
                        }),
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        bottom: '0',
                        'max-height': '200px',
                        'margin-top': '12px',
                        'max-width': '400px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateY(0)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateY(25%)'
                        }),
                    ]))),
                ]),
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastPackage"]])
    ], NotyfToastSuccess);
    return NotyfToastSuccess;
}(ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["Toast"]));



/***/ }),

/***/ "./src/app/price-rule-add/manage-price-rule.component.css":
/*!****************************************************************!*\
  !*** ./src/app/price-rule-add/manage-price-rule.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlLXJ1bGUtYWRkL21hbmFnZS1wcmljZS1ydWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/price-rule-add/manage-price-rule.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/price-rule-add/manage-price-rule.component.ts ***!
  \***************************************************************/
/*! exports provided: ManagePriceRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePriceRuleComponent", function() { return ManagePriceRuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _component_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component-helper */ "./src/app/component-helper.ts");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");













var ManagePriceRuleComponent = /** @class */ (function () {
    function ManagePriceRuleComponent(fb, router, dp, toastr, ap, ls) {
        this.fb = fb;
        this.router = router;
        this.dp = dp;
        this.toastr = toastr;
        this.ap = ap;
        this.ls = ls;
        this.isEdit = false;
        this.currentConditionalsIdx = 0;
        this.PRICE_RULE_TYPE = fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"].TYPE;
        var userInfo = this.ls.getUserInfo();
        this.isEdit = _component_helper__WEBPACK_IMPORTED_MODULE_7__["ComponentHelper"].isEditView(router);
        this.dbId = _component_helper__WEBPACK_IMPORTED_MODULE_7__["ComponentHelper"].getId(this.isEdit, router);
        var priceRuleSet = new fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRuleSet"]([]);
        var priceRuleLocationConditionals = [];
        this.config = this.dbId ? this.dp.getPriceRuleConfig(this.dbId) :
            new fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRuleConfig"](undefined, userInfo.company.companyName, userInfo.company.id, priceRuleSet, priceRuleLocationConditionals);
        this.refresh(this.config, this.isEdit);
        // Seems that when converting options to template variables its NOT able to
        // bind to the model at the init stage
        this.config = this.convertConfigToComponentOptions(this.config);
        // Then converting it back to the objects orginal state it is ABLE to
        // bind to the model
        this.config = this.convertConfigToModel(this.config);
        if (this.config.priceRuleLocationConditionals.length > 0) {
            this.currentConditionalsIdx = 0;
        }
    }
    ManagePriceRuleComponent.prototype.refresh = function (entity, isEdit) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.priceRuleOptions = [];
                        lodash__WEBPACK_IMPORTED_MODULE_11__["forEach"](fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"].TYPE, function (val, key) {
                            _this.priceRuleOptions.push({
                                label: key.replace(/_/g, ' ').toLowerCase().replace('mass', 'volume'),
                                value: val
                            });
                        });
                        return [4 /*yield*/, this.ap.listCompanies()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.ap.getCompanies()];
                    case 2:
                        _a.companies = _b.sent();
                        if (entity && isEdit) {
                            // Couldn't fig out how to set angular form item on init
                            // so loading only one company if edit view
                            this.companyOptions = this.companies
                                .filter(function (company) {
                                return company.id === entity.companyId;
                            }).map(function (company) {
                                return {
                                    label: company.companyName,
                                    value: company
                                };
                            });
                        }
                        else {
                            this.companyOptions = this.companies.map(function (company) {
                                var option = {
                                    label: company.companyName,
                                    value: company.id
                                };
                                return option;
                            });
                        }
                        this.locations = this.dp.getLocationOptions();
                        this.currentCompany = entity.companyId;
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagePriceRuleComponent.prototype.ngOnInit = function () {
        console.log(this.config);
    };
    ManagePriceRuleComponent.prototype.createPriceRule = function (step) {
        var pType = '';
        step = step ? step : 1;
        return new fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"](step, pType);
    };
    ManagePriceRuleComponent.prototype.onRuleTypeSelectionChange = function (value) {
        console.log('Rule Type Selected', value);
        if (value === fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"].TYPE.GET_GREATER_NEXT) {
            if (this.currentConditionalsIdx || this.currentConditionalsIdx === 0 && this.config.priceRuleLocationConditionals.length > 0) {
                this.config.priceRuleLocationConditionals[this.currentConditionalsIdx].priceRuleSet.priceRules =
                    this.config.priceRuleLocationConditionals[this.currentConditionalsIdx].priceRuleSet.priceRules.map(function (rule) {
                        if (rule.type === fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"].TYPE.GET_GREATER_NEXT) {
                            rule.stepNo = -1;
                        }
                        return rule;
                    }).sort(function (a, b) {
                        return a.stepNo - b.stepNo;
                    });
            }
            else {
                this.config.priceRuleSet.priceRules = this.config.priceRuleSet.priceRules.map(function (rule) {
                    if (rule.type === fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRule"].TYPE.GET_GREATER_NEXT) {
                        rule.stepNo = -1;
                    }
                    return rule;
                }).sort(function (a, b) {
                    return a.stepNo - b.stepNo;
                });
            }
        }
    };
    ManagePriceRuleComponent.prototype.addRule = function (currentConditionalsIdx) {
        if (currentConditionalsIdx || currentConditionalsIdx === 0) {
            var stepNo = this.config.priceRuleLocationConditionals[currentConditionalsIdx].priceRuleSet.priceRules.length + 1;
            var priceRule = this.createPriceRule(stepNo);
            this.config.priceRuleLocationConditionals[currentConditionalsIdx].priceRuleSet.priceRules.push(priceRule);
        }
        else {
            var stepNo = this.config.priceRuleSet.priceRules.length + 1;
            var priceRule = this.createPriceRule(stepNo);
            this.config.priceRuleSet.priceRules.push(priceRule);
        }
    };
    ManagePriceRuleComponent.prototype.removeRule = function (rule, currentConditionalsIdx) {
        console.log('remove rule', rule, this.currentConditionalsIdx);
        if (this.currentConditionalsIdx || this.currentConditionalsIdx === 0 && this.config.priceRuleLocationConditionals.length > 0) {
            this.config.priceRuleLocationConditionals[this.currentConditionalsIdx].priceRuleSet.priceRules =
                this.config.priceRuleLocationConditionals[this.currentConditionalsIdx].priceRuleSet.priceRules.filter(function (item) {
                    return item !== rule;
                });
        }
        else {
            this.config.priceRuleSet.priceRules = this.config.priceRuleSet.priceRules.filter(function (item) {
                return item !== rule;
            });
        }
    };
    // Location Conditionals
    ManagePriceRuleComponent.prototype.addLocationConditional = function () {
        var conditional = this.createLocationConditional();
        this.config.priceRuleLocationConditionals.push(conditional);
    };
    ManagePriceRuleComponent.prototype.removeLocationConditionalByIdx = function (idx) {
        var i = 0;
        this.config.priceRuleLocationConditionals = this.config.priceRuleLocationConditionals.filter(function (item) {
            var isItem = i === idx;
            i++;
            return !isItem;
        });
        this.currentConditionalsIdx = 0;
    };
    ManagePriceRuleComponent.prototype.removeLocationConditional = function (conditional) {
        this.config.priceRuleLocationConditionals = this.config.priceRuleLocationConditionals.filter(function (item) {
            return item !== conditional;
        });
    };
    ManagePriceRuleComponent.prototype.getCurrentLocationConditional = function () {
        return this.config.priceRuleLocationConditionals[this.currentConditionalsIdx];
    };
    ManagePriceRuleComponent.prototype.createLocationConditional = function (name) {
        var priceRuleSet = new fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRuleSet"]([]);
        var conditional = new fr8models__WEBPACK_IMPORTED_MODULE_8__["PriceRuleLocationConditional"]([], priceRuleSet, 'uuid', name != null ? name : 'Filter');
        return conditional;
    };
    ManagePriceRuleComponent.prototype.setDefaultLocationConditional = function () {
        var conditional = this.createLocationConditional();
        this.config.priceRuleLocationConditionals.push(conditional);
    };
    ManagePriceRuleComponent.prototype.setCurrentLocationConditional = function (conditional) {
        this.config.priceRuleLocationConditionals[this.currentConditionalsIdx] = conditional;
    };
    ManagePriceRuleComponent.prototype.setCurrentLocationConditionalIdx = function (idx) {
        this.currentConditionalsIdx = parseInt(idx);
    };
    ManagePriceRuleComponent.prototype.toggleLocation = function (loc) {
        console.log('Toggling', loc);
        // Remove;
        if (this.config.priceRuleLocationConditionals.length < 1) {
            console.log('No conditionals found, adding conditional');
            this.setDefaultLocationConditional();
        }
        var conditional = this.getCurrentLocationConditional();
        var initLen = conditional.locationList.length;
        conditional.locationList = conditional.locationList.filter(function (item) {
            return item.toLowerCase() !== loc.value;
        });
        // Add
        if (initLen === conditional.locationList.length && !this.isLocationAlreadySelectedByOtherConditional(loc)) {
            loc.isSelected = true;
            conditional.locationList.push(loc.value.toLowerCase());
        }
        else {
            loc.isSelected = false;
        }
        this.setCurrentLocationConditional(conditional);
        console.log('Toggling location', this.currentConditionalsIdx, this.config.priceRuleLocationConditionals);
    };
    ManagePriceRuleComponent.prototype.isLocationSelected = function (loc) {
        var conditional = this.getCurrentLocationConditional();
        return conditional.locationList.filter(function (l) {
            return l.toLowerCase() === loc.value;
        }).length > 0;
    };
    ManagePriceRuleComponent.prototype.isLocationAlreadySelectedByOtherConditional = function (loc) {
        var _this = this;
        var conditionals = this.config.priceRuleLocationConditionals;
        var selectedLocations = [];
        var isAlreadySelected = false;
        var idx = 0;
        conditionals.forEach(function (cItem) {
            cItem.locationList.forEach(function (lItem) {
                if (lItem.toLowerCase() === loc.value && idx !== _this.currentConditionalsIdx) {
                    isAlreadySelected = true;
                }
            });
            idx++;
        });
        return isAlreadySelected;
    };
    ManagePriceRuleComponent.prototype.savePriceRuleConfig = function () {
        var _this = this;
        this.config.companyId = this.currentCompany;
        this.dp.savePriceRuleSet(this.config).then(function (res) {
            _this.onSave(res, 'Saved Quote Price Rule Config', 'Failed to Save Quote Price Rule Config ', ['price-rule']);
        }).catch(function (err) {
            console.log(err);
        });
        console.log('saving config', this.config);
    };
    ManagePriceRuleComponent.prototype.onSave = function (res, successMessage, failMessage, redirUri) {
        console.log('onSaveObj', res);
        successMessage = successMessage ? successMessage : 'Saved Quote Price Rule Config';
        failMessage = failMessage ? failMessage : 'Failed to Save Quote Price Rule Config';
        var opt = JSON.parse(JSON.stringify(this.toastr.toastrConfig));
        opt.positionClass = 'toast-bottom-right';
        opt.toastClass = 'notyf confirm';
        if (res) {
            opt.toastComponent = _notify_success_toastr__WEBPACK_IMPORTED_MODULE_9__["NotyfToastSuccess"];
            this.toastr.success(successMessage, '', opt);
            if (redirUri) {
                this.router.navigate(redirUri);
            }
        }
        else {
            opt.toastComponent = _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_10__["NotyfToastFail"];
            this.toastr.error(failMessage, '', opt);
        }
    };
    // Helper Func
    ManagePriceRuleComponent.prototype.convertRuleTypeToComponentOptions = function (rule) {
        var res = this.priceRuleOptions.filter(function (ruleOption) {
            return ruleOption.value.toLowerCase() === rule.type.toLowerCase();
        });
        return res && res.length > 0 ? res[0] : null;
    };
    ManagePriceRuleComponent.prototype.convertRuleTypeComponentOptionsToModel = function (rule) {
        return rule && rule.type ? rule.type.value : undefined;
    };
    ManagePriceRuleComponent.prototype.convertConfigToComponentOptions = function (config) {
        var _this = this;
        config.priceRuleLocationConditionals = config.priceRuleLocationConditionals.map(function (conditional) {
            conditional.priceRuleSet.priceRules = conditional.priceRuleSet.priceRules.map(function (rule) {
                rule.type = _this.convertRuleTypeToComponentOptions(rule);
                return rule;
            });
            return conditional;
        });
        return config;
    };
    ManagePriceRuleComponent.prototype.convertConfigToModel = function (config) {
        var _this = this;
        config.priceRuleLocationConditionals = config.priceRuleLocationConditionals.map(function (conditional) {
            conditional.priceRuleSet.priceRules = conditional.priceRuleSet.priceRules.map(function (rule) {
                rule.type = _this.convertRuleTypeComponentOptionsToModel(rule);
                return rule;
            });
            return conditional;
        });
        return config;
    };
    ManagePriceRuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-price-rule',
            template: __webpack_require__(/*! raw-loader!./manage-price-rule.component.html */ "./node_modules/raw-loader/index.js!./src/app/price-rule-add/manage-price-rule.component.html"),
            styles: [__webpack_require__(/*! ./manage-price-rule.component.css */ "./src/app/price-rule-add/manage-price-rule.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _dispatch_provider__WEBPACK_IMPORTED_MODULE_4__["DispatchProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"], _auth_provider__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], ManagePriceRuleComponent);
    return ManagePriceRuleComponent;
}());



/***/ }),

/***/ "./src/app/price-rule-list/price-rule-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/price-rule-list/price-rule-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlLXJ1bGUtbGlzdC9wcmljZS1ydWxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/price-rule-list/price-rule-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/price-rule-list/price-rule-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PriceRuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRuleListComponent", function() { return PriceRuleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");




var PriceRuleListComponent = /** @class */ (function () {
    function PriceRuleListComponent(dp) {
        this.dp = dp;
    }
    PriceRuleListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    PriceRuleListComponent.prototype.refresh = function () {
        var _this = this;
        this.priceRuleConfigs = [];
        this.selectedPriceRuleConfigs = [];
        this.dp.listPriceRules()
            .then(function () {
            var data = _this.dp.getPriceRuleList();
            console.log('Got price rule config list', data);
            _this.priceRuleConfigs = data;
        }).catch(function (err) {
            console.error(err);
        });
    };
    PriceRuleListComponent.prototype.rowSelected = function (priceRuleSet) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](this.selectedPriceRuleConfigs, priceRuleSet)) {
            this.selectedPriceRuleConfigs.push(priceRuleSet);
        }
        else {
            this.selectedPriceRuleConfigs = this.selectedPriceRuleConfigs.filter(function (compare) {
                return compare !== priceRuleSet;
            });
        }
    };
    PriceRuleListComponent.prototype.isRowSelected = function (priceRuleSet) {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](this.selectedPriceRuleConfigs, priceRuleSet);
    };
    PriceRuleListComponent.prototype.deleteEntity = function (priceRuleSet) {
        var _this = this;
        this.dp.removePriceRuleSet(priceRuleSet.id)
            .then(function () { return _this.dp.getPriceRuleList(); })
            .then(function (configs) {
            _this.priceRuleConfigs = configs;
        });
    };
    PriceRuleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price-rule-list',
            template: __webpack_require__(/*! raw-loader!./price-rule-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/price-rule-list/price-rule-list.component.html"),
            styles: [__webpack_require__(/*! ./price-rule-list.component.css */ "./src/app/price-rule-list/price-rule-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_provider__WEBPACK_IMPORTED_MODULE_3__["DispatchProvider"]])
    ], PriceRuleListComponent);
    return PriceRuleListComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    ProductAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            ProductName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ProductDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ProductPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductAddComponent.prototype.addProduct = function (ProductName, ProductDescription, ProductPrice) {
    };
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! raw-loader!./product-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, router, fb) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.product = {};
        this.createForm();
    }
    ProductEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            ProductName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ProductDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ProductPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductEditComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            //   this.ps.editProduct(params.id).subscribe(res => {
            //     this.product = res;
            // });
        });
    };
    ProductEditComponent.prototype.updateProduct = function (ProductName, ProductDescription, ProductPrice, id) {
        this.route.params.subscribe(function (params) {
            // this.ps.updateProduct(ProductName, ProductDescription, ProductPrice, params.id);
            // this.router.navigate(['products']);
        });
    };
    ProductEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/rating-card-add/rating-add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/rating-card-add/rating-add.component.ts ***!
  \*********************************************************/
/*! exports provided: RatingCardAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingCardAddComponent", function() { return RatingCardAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component-helper */ "./src/app/component-helper.ts");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");










var RatingCardAddComponent = /** @class */ (function () {
    function RatingCardAddComponent(fb, router, dp, toastr, ap) {
        this.fb = fb;
        this.router = router;
        this.dp = dp;
        this.toastr = toastr;
        this.ap = ap;
        // Local template var
        this.selectedLocation = '';
        this.selectedLocationRates = {
            majorPriceLevels: [],
            minorPriceLevels: [],
            maxRates: []
        };
        this.isEdit = false;
        this.isEdit = _component_helper__WEBPACK_IMPORTED_MODULE_4__["ComponentHelper"].isEditView(router);
        this.dbId = _component_helper__WEBPACK_IMPORTED_MODULE_4__["ComponentHelper"].getId(this.isEdit, router);
        this.ratingCard = this.dbId ? this.dp.getRatingCard(this.dbId) : this.dp.getDefaultRatingCard();
        console.log('Rating Card', this.ratingCard);
        this.createForm(this.ratingCard);
        this.refresh();
    }
    RatingCardAddComponent.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ap.listCompanies()];
                    case 1:
                        _a.sent();
                        this.companyOptions = this.ap.getCompanyOptions();
                        this.locations = this.dp.getLocationOptions();
                        this.selectedLocation = '';
                        this.selectedLocationRates = {
                            majorPriceLevels: [],
                            minorPriceLevels: [],
                            maxRates: []
                        };
                        console.log('Loaded Locations', this.locations);
                        return [2 /*return*/];
                }
            });
        });
    };
    RatingCardAddComponent.prototype.createForm = function (entity) {
        this.angForm = this.fb.group({
            CompanyOption: [entity.companyName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    RatingCardAddComponent.prototype.update = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateUserPromise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('Edit:', this.ratingCard);
                updateUserPromise = this.dp.updateRatingCard(this.ratingCard).then(function (res) {
                    _this.onSave(res, 'Updated RatingCard ' + _this.ratingCard, 'Failed to Update RatingCard ' + _this.ratingCard, ['rating-card']);
                }).catch(function (err) {
                    _this.onSave(null, 'Updated RatingCard ' + _this.ratingCard, 'Failed to Update RatingCard ' + _this.ratingCard, ['rating-card']);
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    RatingCardAddComponent.prototype.save = function (companyIdx) {
        var _this = this;
        // public majorLocations?: MajorLocationSet,
        // public minorLocations?: MinorLocationSet,
        // public pricingRateLevelList?: Array<PricingRateLevelPair>,
        // public cardData?: CardData){ }
        var companyId = this.companyOptions[companyIdx].value;
        console.log('Saving card for:', companyId, this.ratingCard);
        this.dp.saveRatingCard(companyId, this.ratingCard).then(function (res) {
            _this.onSave(res, 'Saved RatingCard', 'Failed to Save RatingCard ', ['rating-card']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    RatingCardAddComponent.prototype.onSave = function (res, successMessage, failMessage, redirUri) {
        console.log('onSaveObj', res);
        successMessage = successMessage ? successMessage : 'Saved RatingCard';
        failMessage = failMessage ? failMessage : 'Failed to Save RatingCard';
        var opt = JSON.parse(JSON.stringify(this.toastr.toastrConfig));
        opt.positionClass = 'toast-bottom-right';
        opt.toastClass = 'notyf confirm';
        if (res) {
            opt.toastComponent = _notify_success_toastr__WEBPACK_IMPORTED_MODULE_8__["NotyfToastSuccess"];
            this.toastr.success(successMessage, '', opt);
            if (redirUri) {
                this.router.navigate(redirUri);
            }
        }
        else {
            opt.toastComponent = _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_9__["NotyfToastFail"];
            this.toastr.error(failMessage, '', opt);
        }
    };
    RatingCardAddComponent.prototype.selectLocation = function (location) {
        this.locations.forEach(function (location) {
            location.isSelected = false;
        });
        location.isSelected = location.isSelected ? false : true;
        this.selectedLocation = location;
        this.getLocationRatesObj(location);
    };
    RatingCardAddComponent.prototype.getLocationRatesObj = function (location) {
        this.selectedLocationRates = this.dp.getLocationRatesObj(location.value, this.ratingCard);
        this.majorPriceLevels = this.selectedLocationRates.majorPriceLevels;
        this.minorPriceLevels = this.selectedLocationRates.minorPriceLevels;
        this.maxRates = this.selectedLocationRates.maxRates;
        console.log(this.selectedLocationRates);
    };
    RatingCardAddComponent.prototype.ngOnInit = function () {
    };
    RatingCardAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating-card-add',
            template: __webpack_require__(/*! raw-loader!./rating-card-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/rating-card-add/rating-card-add.component.html"),
            styles: [__webpack_require__(/*! ./rating-card-add.component.css */ "./src/app/rating-card-add/rating-card-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _dispatch_provider__WEBPACK_IMPORTED_MODULE_6__["DispatchProvider"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _auth_provider__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"]])
    ], RatingCardAddComponent);
    return RatingCardAddComponent;
}());



/***/ }),

/***/ "./src/app/rating-card-add/rating-card-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/rating-card-add/rating-card-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1jYXJkLWFkZC9yYXRpbmctY2FyZC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rating-card-get/rating-card-get.component.css":
/*!***************************************************************!*\
  !*** ./src/app/rating-card-get/rating-card-get.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZy1jYXJkLWdldC9yYXRpbmctY2FyZC1nZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rating-card-get/rating-card-get.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rating-card-get/rating-card-get.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingCardListComponent", function() { return RatingCardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fr8models */ "../Fr8models/dist/index.js");
/* harmony import */ var fr8models__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fr8models__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dispatch_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dispatch.provider */ "./src/app/dispatch.provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var RatingCardListComponent = /** @class */ (function () {
    function RatingCardListComponent(dispatchProvider) {
        this.dispatchProvider = dispatchProvider;
    }
    RatingCardListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    RatingCardListComponent.prototype.refresh = function () {
        var _this = this;
        this.ratingCards = [];
        this.selectedEntities = [];
        this.dispatchProvider.listRatingCard()
            .then(function () { return _this.dispatchProvider.getRatingCards(); })
            .then(function (ratingCards) {
            _this.ratingCards = ratingCards;
        });
    };
    RatingCardListComponent.prototype.rowSelected = function (company) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.selectedEntities, company)) {
            this.selectedEntities.push(company);
        }
        else {
            this.selectedEntities = this.selectedEntities.filter(function (compare) {
                return compare !== fr8models__WEBPACK_IMPORTED_MODULE_2__["RatingCard"];
            });
        }
    };
    RatingCardListComponent.prototype.isRowSelected = function (selected) {
        return lodash__WEBPACK_IMPORTED_MODULE_4__["includes"](this.selectedEntities, selected);
    };
    RatingCardListComponent.prototype.deleteEntity = function (ratingCard) {
        var _this = this;
        var id = ratingCard.cardData ? ratingCard.cardData.id : null;
        this.dispatchProvider.deleteRatingCard(id)
            .then(function () { return _this.dispatchProvider.listRatingCard(); })
            .then(function () { return _this.dispatchProvider.getRatingCards(); })
            .then(function (ratingCards) {
            _this.ratingCards = ratingCards;
        });
    };
    RatingCardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating-card-get',
            template: __webpack_require__(/*! raw-loader!./rating-card-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/rating-card-get/rating-card-get.component.html"),
            styles: [__webpack_require__(/*! ./rating-card-get.component.css */ "./src/app/rating-card-get/rating-card-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_provider__WEBPACK_IMPORTED_MODULE_3__["DispatchProvider"]])
    ], RatingCardListComponent);
    return RatingCardListComponent;
}());



/***/ }),

/***/ "./src/app/rating-card.service.ts":
/*!****************************************!*\
  !*** ./src/app/rating-card.service.ts ***!
  \****************************************/
/*! exports provided: RatingCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingCardService", function() { return RatingCardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dispatch_quote_gateway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dispatch-quote.gateway */ "./src/app/dispatch-quote.gateway.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatch-quote/quote-config.service */ "./src/app/dispatch-quote/quote-config.service.ts");






var RatingCardService = /** @class */ (function () {
    function RatingCardService(dqg, ls, as, qc) {
        this.dqg = dqg;
        this.ls = ls;
        this.as = as;
        this.qc = qc;
    }
    RatingCardService.prototype.addRatingCard = function () {
        return Promise.resolve();
    };
    // Gateway func
    // RatingCard
    RatingCardService.prototype.listRatingCard = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                res = new Promise(function (res, rej) {
                    _this.as.listCompanies()
                        .then(function () { return _this.dqg.getRatingAllCard(); })
                        .then(function (ratingCards) {
                        // Default Rating Card if ratingCards are not defined
                        ratingCards = ratingCards ? ratingCards : [_this.qc.getRatingCard()];
                        _this.ratingCards = _this.extendRaingCardList(ratingCards);
                        _this.myRatingCard = _this.findMyRatingCard(_this.ratingCards);
                        res();
                    });
                });
                return [2 /*return*/, res];
            });
        });
    };
    RatingCardService.prototype.getMyRatingCard = function () {
        return this.myRatingCard ? this.myRatingCard : this.findMyRatingCard(this.ratingCards);
    };
    RatingCardService.prototype.findMyRatingCard = function (list) {
        var companyId = this.ls.getUserCompanyId();
        var myRatingCard = list.filter(function (ratingCard) {
            console.log(ratingCard.cardData, companyId);
            return ratingCard.cardData.companyId === companyId;
        });
        return myRatingCard && myRatingCard.length ? myRatingCard[0] : null;
    };
    RatingCardService.prototype.getDefaultRatingCard = function () {
        return this.qc.getRatingCard();
    };
    RatingCardService.prototype.getRatingCards = function () {
        return this.ratingCards;
    };
    RatingCardService.prototype.getRatingCard = function (id) {
        var card;
        this.ratingCards.forEach(function (ratingCard) {
            if (ratingCard.cardData && ratingCard.cardData.id === id) {
                card = ratingCard;
            }
        });
        return card;
    };
    RatingCardService.prototype.getLocationRatesObj = function (location, ratingCard) {
        var majorPriceLevels = ratingCard.majorLocations[location];
        var zone = this.qc.getZone(location);
        var minorPriceLevels = ratingCard.minorLocations[zone];
        var maxRates = ratingCard.pricingRateLevelList[location];
        if (!maxRates) {
            maxRates = ratingCard.pricingRateLevelList[zone];
        }
        return {
            majorPriceLevels: majorPriceLevels,
            minorPriceLevels: minorPriceLevels,
            maxRates: maxRates
        };
    };
    RatingCardService.prototype.saveRatingCardWithModel = function (companyId, ratingCard) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.dqg.saveRatingCard(companyId, ratingCard)];
            });
        });
    };
    RatingCardService.prototype.updateCompanyWithModel = function (ratingCard) {
        var id = ratingCard.cardData.id;
        return this.dqg.updateRatingCard(id, ratingCard);
    };
    RatingCardService.prototype.deleteRatingCard = function (id) {
        var _this = this;
        return this.dqg.deleteRatingCard(id)
            .then(function () {
            _this.ratingCards = _this.ratingCards.filter(function (ratingCard) {
                return ratingCard.id !== id;
            });
        });
    };
    // Helper
    RatingCardService.prototype.extendRaingCardList = function (ratingCardList) {
        var _this = this;
        return ratingCardList.map(function (ratingCard) {
            ratingCard.cardData = ratingCard.cardData ? ratingCard.cardData : {
                companyName: 'default'
            };
            if (ratingCard.cardData.companyId) {
                var company = _this.as.getCompany(ratingCard.cardData.companyId);
                var companyName = company ? company.companyName : 'Default Company';
                ratingCard.companyName = companyName;
            }
            return ratingCard;
        });
    };
    RatingCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dispatch_quote_gateway__WEBPACK_IMPORTED_MODULE_2__["DispatchQuoteGateway"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _dispatch_quote_quote_config_service__WEBPACK_IMPORTED_MODULE_5__["QuoteConfig"]])
    ], RatingCardService);
    return RatingCardService;
}());



/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.KEY = {
            LOGIN_TOKEN: 'fr8cortoken',
            USER_INFO: 'fr8userinfo'
        };
    }
    StorageService.prototype.getItem = function (k) {
        return localStorage.getItem(k);
    };
    StorageService.prototype.setItem = function (k, v) {
        return localStorage.setItem(k, v);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/user-add/user-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-add/user-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItYWRkL3VzZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-add/user-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-add/user-add.component.ts ***!
  \************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var _component_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component-helper */ "./src/app/component-helper.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _notify_success_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notify-success-toastr */ "./src/app/notify-success-toastr.ts");
/* harmony import */ var _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notify-fail-toastr */ "./src/app/notify-fail-toastr.ts");









var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(fb, router, ap, toastr) {
        this.fb = fb;
        this.router = router;
        this.ap = ap;
        this.toastr = toastr;
        this.isEdit = false;
        this.isEdit = _component_helper__WEBPACK_IMPORTED_MODULE_5__["ComponentHelper"].isEditView(router);
        this.userDbId = _component_helper__WEBPACK_IMPORTED_MODULE_5__["ComponentHelper"].getId(this.isEdit, router);
        this.user = this.userDbId ? ap.getUser(this.userDbId) : this.user;
        this.createForm(this.user);
        this.refresh(this.user, this.isEdit);
    }
    UserAddComponent.prototype.refresh = function (user, isEdit) {
        var _this = this;
        this.ap.listCompanies()
            .then(function () { return _this.ap.getCompanies(); })
            .then(function (companies) {
            _this.companies = companies;
            if (user && isEdit) {
                // Couldn't fig out how to set angular form item on init
                // so loading only one company if edit view
                _this.companyOptions = companies
                    .filter(function (company) {
                    return company.id === user.company.id;
                }).map(function (company) {
                    return {
                        label: company.companyName,
                        value: company.id
                    };
                });
            }
            else {
                _this.companyOptions = companies.map(function (company) {
                    var option = {
                        label: company.companyName,
                        value: company.id
                    };
                    return option;
                });
            }
        });
    };
    UserAddComponent.prototype.createForm = function (user) {
        if (user) {
            var companyName = user.company ? this.ap.getCompany(user.company.id).companyName : '';
            console.log(companyName);
            this.angForm = this.fb.group({
                Username: [user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                CompanyOption: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
        else {
            this.angForm = this.fb.group({
                Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                CompanyOption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
        }
    };
    UserAddComponent.prototype.updateUser = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resetPassPromise, userId, updateUserPromise;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.user.username = username;
                resetPassPromise = Promise.resolve();
                if (password) {
                    userId = this.user.id;
                    resetPassPromise = this.ap.resetPassword(userId, password);
                }
                updateUserPromise = this.ap.updateUser(this.user);
                Promise.all([resetPassPromise, updateUserPromise]).then(function (res) {
                    if (res[0] || res[1]) {
                        _this.onSave(res, 'Updated User ' + _this.user.username, 'Failed to Update User ' + _this.user.username, ['user']);
                    }
                    else {
                        _this.onSave(null, 'Updated User ' + _this.user.username, 'Failed to Update User ' + _this.user.username, ['user']);
                    }
                }).catch(function (err) {
                    _this.onSave(null, 'Updated User ' + _this.user.username, 'Failed to Update User ' + _this.user.username, ['user']);
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    UserAddComponent.prototype.saveUser = function (username, password, companySelectedIndex) {
        var _this = this;
        var companyOption = _component_helper__WEBPACK_IMPORTED_MODULE_5__["ComponentHelper"].reverseLookUpSelectedDropdownValue(companySelectedIndex, this.companyOptions);
        var companyId = companyOption ? companyOption.value : -1;
        password = password ? password : '';
        this.ap.saveUser(this.userDbId, username, password, companyId).then(function (res) {
            _this.onSave(res, 'Saved User ' + username, 'Failed to Save User ' + username, ['user']);
        }).catch(function (err) {
            console.log(err);
        });
    };
    UserAddComponent.prototype.onSave = function (res, successMessage, failMessage, redirUri) {
        console.log('onSaveObj', res);
        successMessage = successMessage ? successMessage : 'Saved User';
        failMessage = failMessage ? failMessage : 'Failed to Save User';
        var opt = JSON.parse(JSON.stringify(this.toastr.toastrConfig));
        opt.positionClass = 'toast-bottom-right';
        opt.toastClass = 'notyf confirm';
        if (res) {
            opt.toastComponent = _notify_success_toastr__WEBPACK_IMPORTED_MODULE_7__["NotyfToastSuccess"];
            this.toastr.success(successMessage, '', opt);
            if (redirUri) {
                this.router.navigate(redirUri);
            }
        }
        else {
            opt.toastComponent = _notify_fail_toastr__WEBPACK_IMPORTED_MODULE_8__["NotyfToastFail"];
            this.toastr.error(failMessage, '', opt);
        }
    };
    UserAddComponent.prototype.ngOnInit = function () {
    };
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! raw-loader!./user-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/user-add/user-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_provider__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/user-get/user-get.component.css":
/*!*************************************************!*\
  !*** ./src/app/user-get/user-get.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZ2V0L3VzZXItZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-get/user-get.component.ts":
/*!************************************************!*\
  !*** ./src/app/user-get/user-get.component.ts ***!
  \************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.provider */ "./src/app/auth.provider.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var UserListComponent = /** @class */ (function () {
    function UserListComponent(authProvider) {
        this.authProvider = authProvider;
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    UserListComponent.prototype.refresh = function () {
        var _this = this;
        this.users = [];
        this.selectedUsers = [];
        this.authProvider.listCompanies();
        this.authProvider.listUsers()
            .then(function () { return _this.authProvider.getMyUsers(); })
            .then(function (users) {
            _this.users = users;
        });
    };
    UserListComponent.prototype.rowSelected = function (user) {
        if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedUsers, user)) {
            this.selectedUsers.push(user);
        }
        else {
            this.selectedUsers = this.selectedUsers.filter(function (compare) {
                return compare !== user;
            });
        }
    };
    UserListComponent.prototype.isRowSelected = function (selected) {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](this.selectedUsers, selected);
    };
    UserListComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.authProvider.removeUser(user.id)
            .then(function () { return _this.authProvider.getMyUsers(); })
            .then(function (users) {
            _this.users = users;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-get',
            template: __webpack_require__(/*! raw-loader!./user-get.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-get/user-get.component.html"),
            styles: [__webpack_require__(/*! ./user-get.component.css */ "./src/app/user-get/user-get.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_provider__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    backendUrl: 'https://api.innedus.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/miggle/GitHub/Fr8front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map