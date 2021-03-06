/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Fabric-Composer module. Fabric-Composer is a framework for creating
 * blockchain backed digital networks and exchanging assets between participants
 * via processing transactions.
 * @module composer-common
 */

/* istanbul ignore next */
if (!nodeHasNewBufferVersion()) {
    const originalBufferFrom = Buffer.from;
    const newBufferFrom = function (str, encoding) {
        if (arguments.length === 2 && typeof str === 'string' && encoding === 'base64') {
            return new Buffer(str, encoding);
        }
        return originalBufferFrom.apply(null, arguments);
    };
    Object.defineProperty(Buffer, 'from', { value: newBufferFrom });
}

/**
 * Check whether we're running in a version of node which has the updated Buffer implementation
 * Used above to fall back to the old version if needed.
 * @return {boolean} whether the new version is supported
 */
function nodeHasNewBufferVersion() {
    try {
        Buffer.from('b2xkbm9kZQ==', 'base64');
        return true;
    } catch (e) {
        return false;
    }
}

module.exports.AclFile = require('./lib/acl/aclfile');
module.exports.AclManager = require('./lib/aclmanager');
module.exports.AssetDeclaration = require('./lib/introspect/assetdeclaration');
module.exports.BaseException = require('./lib/baseexception');
module.exports.BusinessNetworkDefinition = require('./lib/businessnetworkdefinition');
module.exports.ClassDeclaration = require('./lib/introspect/classdeclaration');
module.exports.Concept = require('./lib/model/concept');
module.exports.Connection = require('./lib/connection');
module.exports.ConnectionManager = require('./lib/connectionmanager');
module.exports.ConnectionProfileManager = require('./lib/connectionprofilemanager');
module.exports.ConnectionProfileStore = require('./lib/connectionprofilestore');
module.exports.Factory = require('./lib/factory');
module.exports.FileWallet = require('./lib/filewallet');
module.exports.FileWriter = require('./lib/codegen/filewriter');
module.exports.FunctionDeclaration = require('./lib/introspect/functiondeclaration');
module.exports.FSConnectionProfileStore = require('./lib/fsconnectionprofilestore');
module.exports.Globalize = require('./lib/globalize');
module.exports.Introspector = require('./lib/introspect/introspector');
module.exports.JSScriptProcessor = require('./lib/introspect/jsscriptprocessor');
module.exports.Logger = require('./lib/log/logger');
module.exports.ModelFile = require('./lib/introspect/modelfile');
module.exports.ModelManager = require('./lib/modelmanager');
module.exports.ParticipantDeclaration = require('./lib/introspect/participantdeclaration');
module.exports.Property = require('./lib/introspect/property');
module.exports.Relationship = require('./lib/model/relationship');
module.exports.Resource = require('./lib/model/resource');
module.exports.ScriptManager = require('./lib/scriptmanager');
module.exports.ScriptProcessor = require('./lib/introspect/scriptprocessor');
module.exports.SecurityContext = require('./lib/securitycontext');
module.exports.SecurityException = require('./lib/securityexception');
module.exports.Serializer = require('./lib/serializer');
module.exports.TransactionDeclaration = require('./lib/introspect/transactiondeclaration');
module.exports.TypescriptVisitor = require('./lib/codegen/fromcto/typescript/typescriptvisitor');
module.exports.Util = require('./lib/util');
module.exports.Wallet = require('./lib/wallet');
