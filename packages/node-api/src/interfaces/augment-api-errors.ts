// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or the
       * maximum number of consumers has been reached.
       **/
      NoProvider: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    loAuthorityList: {
      /**
       * The LO is already in the list.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The LO is not in the list.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    logionLoc: {
      /**
       * Occurs when trying to close an already closed LOC
       **/
      AlreadyClosed: AugmentedError<ApiType>;
      /**
       * The LOC ID has already been used.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Occurs when trying to void a LOC already void
       **/
      AlreadyVoid: AugmentedError<ApiType>;
      /**
       * Occurs when trying to mutate a closed LOC
       **/
      CannotMutate: AugmentedError<ApiType>;
      /**
       * Occurs when trying to mutate a void LOC
       **/
      CannotMutateVoid: AugmentedError<ApiType>;
      /**
       * Cannot attach files to this item because the Collection LOC does not allow it
       **/
      CannotUpload: AugmentedError<ApiType>;
      /**
       * A collection LOC must be limited in time and/or quantity of items
       **/
      CollectionHasNoLimit: AugmentedError<ApiType>;
      /**
       * An item with same identifier already exists in the collection
       **/
      CollectionItemAlreadyExists: AugmentedError<ApiType>;
      /**
       * Collection Item cannot be added to given collection because some fields contain too many bytes
       **/
      CollectionItemTooMuchData: AugmentedError<ApiType>;
      /**
       * The collection limits have been reached
       **/
      CollectionLimitsReached: AugmentedError<ApiType>;
      /**
       * Cannot attach same file multiple times
       **/
      DuplicateFile: AugmentedError<ApiType>;
      /**
       * File cannot be added to given LOC because submitted data are invalid
       **/
      FileInvalid: AugmentedError<ApiType>;
      /**
       * Submitter must be either LOC owner, either LOC requester (only when requester is a Polkadot account)
       **/
      InvalidSubmitter: AugmentedError<ApiType>;
      /**
       * Occurs when trying to link to a non-existent LOC
       **/
      LinkedLocNotFound: AugmentedError<ApiType>;
      /**
       * Link cannot be added to given LOC because submitted data are invalid
       **/
      LocLinkInvalid: AugmentedError<ApiType>;
      /**
       * Metadata Item cannot be added to given LOC because submitted data are invalid
       **/
      MetadataItemInvalid: AugmentedError<ApiType>;
      /**
       * Collection items with restricted delivery require at least one associated file
       **/
      MissingFiles: AugmentedError<ApiType>;
      /**
       * Collection items with restricted delivery require an underlying token to be defined
       **/
      MissingToken: AugmentedError<ApiType>;
      /**
       * Must attach at least one file
       **/
      MustUpload: AugmentedError<ApiType>;
      /**
       * Target LOC does not exist
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Occurs when trying to void a LOC by replacing it with a LOC already replacing another LOC
       **/
      ReplacerLocAlreadyReplacing: AugmentedError<ApiType>;
      /**
       * Occurs when trying to void a LOC by replacing it with an already void LOC
       **/
      ReplacerLocAlreadyVoid: AugmentedError<ApiType>;
      /**
       * Occurs when trying to replace void LOC with a non-existent LOC
       **/
      ReplacerLocNotFound: AugmentedError<ApiType>;
      /**
       * Occurs when trying to void a LOC by replacing it with a LOC of a different type
       **/
      ReplacerLocWrongType: AugmentedError<ApiType>;
      /**
       * Unauthorized LOC operation
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * Unexpected requester given LOC type
       **/
      UnexpectedRequester: AugmentedError<ApiType>;
      /**
       * Item cannot be added to given collection, it may be missing or limits are reached
       **/
      WrongCollectionLoc: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nodeAuthorization: {
      /**
       * The node is already claimed by a user.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * The node is already joined in the list.
       **/
      AlreadyJoined: AugmentedError<ApiType>;
      /**
       * The node hasn't been claimed yet.
       **/
      NotClaimed: AugmentedError<ApiType>;
      /**
       * The node doesn't exist in the list.
       **/
      NotExist: AugmentedError<ApiType>;
      /**
       * You are not the owner of the node.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The PeerId is too long.
       **/
      PeerIdTooLong: AugmentedError<ApiType>;
      /**
       * No permisson to perform specific operation.
       **/
      PermissionDenied: AugmentedError<ApiType>;
      /**
       * Too many well known nodes.
       **/
      TooManyNodes: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    recovery: {
      /**
       * This account is already set up for recovery
       **/
      AlreadyProxy: AugmentedError<ApiType>;
      /**
       * This account is already set up for recovery
       **/
      AlreadyRecoverable: AugmentedError<ApiType>;
      /**
       * A recovery process has already started for this account
       **/
      AlreadyStarted: AugmentedError<ApiType>;
      /**
       * This user has already vouched for this recovery
       **/
      AlreadyVouched: AugmentedError<ApiType>;
      /**
       * Some internal state is broken.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * The friend must wait until the delay period to vouch for this recovery
       **/
      DelayPeriod: AugmentedError<ApiType>;
      /**
       * Friends list must be less than max friends
       **/
      MaxFriends: AugmentedError<ApiType>;
      /**
       * User is not allowed to make a call on behalf of this account
       **/
      NotAllowed: AugmentedError<ApiType>;
      /**
       * Friends list must be greater than zero and threshold
       **/
      NotEnoughFriends: AugmentedError<ApiType>;
      /**
       * This account is not a friend who can vouch
       **/
      NotFriend: AugmentedError<ApiType>;
      /**
       * This account is not set up for recovery
       **/
      NotRecoverable: AugmentedError<ApiType>;
      /**
       * Friends list must be sorted and free of duplicates
       **/
      NotSorted: AugmentedError<ApiType>;
      /**
       * A recovery process has not started for this rescuer
       **/
      NotStarted: AugmentedError<ApiType>;
      /**
       * There are still active recovery attempts that need to be closed
       **/
      StillActive: AugmentedError<ApiType>;
      /**
       * The threshold for recovering this account has not been met
       **/
      Threshold: AugmentedError<ApiType>;
      /**
       * Threshold must be greater than zero
       **/
      ZeroThreshold: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    validatorSet: {
      /**
       * Only the validator can add itself back after coming online.
       **/
      BadOrigin: AugmentedError<ApiType>;
      /**
       * Validator is already in the validator set.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Target (post-removal) validator count is below the minimum.
       **/
      TooLowValidatorCount: AugmentedError<ApiType>;
      /**
       * Validator is not approved for re-addition.
       **/
      ValidatorNotApproved: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vault: {
      /**
       * The set of signatories is invalid (size <> from 2 or does not contain only legal officers on transfer creation).
       **/
      InvalidSignatories: AugmentedError<ApiType>;
      /**
       * The transfer initiator is a legal officer.
       **/
      WrongInitiator: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    verifiedRecovery: {
      /**
       * The set of legal officers is invalid (size <> from 2).
       **/
      InvalidLegalOfficers: AugmentedError<ApiType>;
      /**
       * One or both legal officers in the friends list did not yet close an Identity LOC for the account.
       **/
      MissingIdentityLoc: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
