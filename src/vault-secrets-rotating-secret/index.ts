// https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultSecretsRotatingSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Vault Secrets application name that owns the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#app_name VaultSecretsRotatingSecret#app_name}
  */
  readonly appName: string;
  /**
  * AWS configuration to manage the access key rotation for the given IAM user. Required if `secret_provider` is `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#aws_access_keys VaultSecretsRotatingSecret#aws_access_keys}
  */
  readonly awsAccessKeys?: VaultSecretsRotatingSecretAwsAccessKeys;
  /**
  * Azure configuration to manage the application password rotation for the given application. Required if `secret_provider` is `Azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#azure_application_password VaultSecretsRotatingSecret#azure_application_password}
  */
  readonly azureApplicationPassword?: VaultSecretsRotatingSecretAzureApplicationPassword;
  /**
  * Confluent configuration to manage the cloud api key rotation for the given service account. Required if `secret_provider` is `confluent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#confluent_service_account VaultSecretsRotatingSecret#confluent_service_account}
  */
  readonly confluentServiceAccount?: VaultSecretsRotatingSecretConfluentServiceAccount;
  /**
  * GCP configuration to manage the service account key rotation for the given service account. Required if `secret_provider` is `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#gcp_service_account_key VaultSecretsRotatingSecret#gcp_service_account_key}
  */
  readonly gcpServiceAccountKey?: VaultSecretsRotatingSecretGcpServiceAccountKey;
  /**
  * The Vault Secrets integration name with the capability to manage the secret's lifecycle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#integration_name VaultSecretsRotatingSecret#integration_name}
  */
  readonly integrationName: string;
  /**
  * MongoDB Atlas configuration to manage the user password rotation on the given database. Required if `secret_provider` is `mongodb_atlas`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#mongodb_atlas_user VaultSecretsRotatingSecret#mongodb_atlas_user}
  */
  readonly mongodbAtlasUser?: VaultSecretsRotatingSecretMongodbAtlasUser;
  /**
  * The Vault Secrets secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#name VaultSecretsRotatingSecret#name}
  */
  readonly name: string;
  /**
  * HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the rotation policy that governs the rotation of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#rotation_policy_name VaultSecretsRotatingSecret#rotation_policy_name}
  */
  readonly rotationPolicyName: string;
  /**
  * The third party platform the dynamic credentials give access to. One of `aws` or `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#secret_provider VaultSecretsRotatingSecret#secret_provider}
  */
  readonly secretProvider: string;
  /**
  * Twilio configuration to manage the api key rotation on the given account. Required if `secret_provider` is `twilio`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#twilio_api_key VaultSecretsRotatingSecret#twilio_api_key}
  */
  readonly twilioApiKey?: VaultSecretsRotatingSecretTwilioApiKey;
}
export interface VaultSecretsRotatingSecretAwsAccessKeys {
  /**
  * AWS IAM username to rotate the access keys for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#iam_username VaultSecretsRotatingSecret#iam_username}
  */
  readonly iamUsername: string;
}

export function vaultSecretsRotatingSecretAwsAccessKeysToTerraform(struct?: VaultSecretsRotatingSecretAwsAccessKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_username: cdktf.stringToTerraform(struct!.iamUsername),
  }
}


export function vaultSecretsRotatingSecretAwsAccessKeysToHclTerraform(struct?: VaultSecretsRotatingSecretAwsAccessKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_username: {
      value: cdktf.stringToHclTerraform(struct!.iamUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsRotatingSecretAwsAccessKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretAwsAccessKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamUsername = this._iamUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretAwsAccessKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iamUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iamUsername = value.iamUsername;
    }
  }

  // iam_username - computed: false, optional: false, required: true
  private _iamUsername?: string; 
  public get iamUsername() {
    return this.getStringAttribute('iam_username');
  }
  public set iamUsername(value: string) {
    this._iamUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamUsernameInput() {
    return this._iamUsername;
  }
}
export interface VaultSecretsRotatingSecretAzureApplicationPassword {
  /**
  * Application client ID to rotate the application password for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#app_client_id VaultSecretsRotatingSecret#app_client_id}
  */
  readonly appClientId: string;
  /**
  * Application object ID to rotate the application password for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#app_object_id VaultSecretsRotatingSecret#app_object_id}
  */
  readonly appObjectId: string;
}

export function vaultSecretsRotatingSecretAzureApplicationPasswordToTerraform(struct?: VaultSecretsRotatingSecretAzureApplicationPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_client_id: cdktf.stringToTerraform(struct!.appClientId),
    app_object_id: cdktf.stringToTerraform(struct!.appObjectId),
  }
}


export function vaultSecretsRotatingSecretAzureApplicationPasswordToHclTerraform(struct?: VaultSecretsRotatingSecretAzureApplicationPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_client_id: {
      value: cdktf.stringToHclTerraform(struct!.appClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_object_id: {
      value: cdktf.stringToHclTerraform(struct!.appObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretAzureApplicationPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appClientId = this._appClientId;
    }
    if (this._appObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appObjectId = this._appObjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretAzureApplicationPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appClientId = undefined;
      this._appObjectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appClientId = value.appClientId;
      this._appObjectId = value.appObjectId;
    }
  }

  // app_client_id - computed: false, optional: false, required: true
  private _appClientId?: string; 
  public get appClientId() {
    return this.getStringAttribute('app_client_id');
  }
  public set appClientId(value: string) {
    this._appClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appClientIdInput() {
    return this._appClientId;
  }

  // app_object_id - computed: false, optional: false, required: true
  private _appObjectId?: string; 
  public get appObjectId() {
    return this.getStringAttribute('app_object_id');
  }
  public set appObjectId(value: string) {
    this._appObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appObjectIdInput() {
    return this._appObjectId;
  }
}
export interface VaultSecretsRotatingSecretConfluentServiceAccount {
  /**
  * Confluent service account to rotate the cloud api key for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#service_account_id VaultSecretsRotatingSecret#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function vaultSecretsRotatingSecretConfluentServiceAccountToTerraform(struct?: VaultSecretsRotatingSecretConfluentServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function vaultSecretsRotatingSecretConfluentServiceAccountToHclTerraform(struct?: VaultSecretsRotatingSecretConfluentServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsRotatingSecretConfluentServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretConfluentServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretConfluentServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface VaultSecretsRotatingSecretGcpServiceAccountKey {
  /**
  * GCP service account email to impersonate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#service_account_email VaultSecretsRotatingSecret#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function vaultSecretsRotatingSecretGcpServiceAccountKeyToTerraform(struct?: VaultSecretsRotatingSecretGcpServiceAccountKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function vaultSecretsRotatingSecretGcpServiceAccountKeyToHclTerraform(struct?: VaultSecretsRotatingSecretGcpServiceAccountKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretGcpServiceAccountKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretGcpServiceAccountKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface VaultSecretsRotatingSecretMongodbAtlasUser {
  /**
  * MongoDB Atlas database or cluster name to rotate the username and password for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#database_name VaultSecretsRotatingSecret#database_name}
  */
  readonly databaseName: string;
  /**
  * MongoDB Atlas project ID to rotate the username and password for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#project_id VaultSecretsRotatingSecret#project_id}
  */
  readonly projectId: string;
  /**
  * MongoDB Atlas roles to assign to the rotating user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#roles VaultSecretsRotatingSecret#roles}
  */
  readonly roles: string[];
}

export function vaultSecretsRotatingSecretMongodbAtlasUserToTerraform(struct?: VaultSecretsRotatingSecretMongodbAtlasUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function vaultSecretsRotatingSecretMongodbAtlasUserToHclTerraform(struct?: VaultSecretsRotatingSecretMongodbAtlasUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultSecretsRotatingSecretMongodbAtlasUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretMongodbAtlasUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretMongodbAtlasUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._projectId = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._projectId = value.projectId;
      this._roles = value.roles;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}
export interface VaultSecretsRotatingSecretTwilioApiKey {
}

export function vaultSecretsRotatingSecretTwilioApiKeyToTerraform(struct?: VaultSecretsRotatingSecretTwilioApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vaultSecretsRotatingSecretTwilioApiKeyToHclTerraform(struct?: VaultSecretsRotatingSecretTwilioApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VaultSecretsRotatingSecretTwilioApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultSecretsRotatingSecretTwilioApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultSecretsRotatingSecretTwilioApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret}
*/
export class VaultSecretsRotatingSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_vault_secrets_rotating_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultSecretsRotatingSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultSecretsRotatingSecret to import
  * @param importFromId The id of the existing VaultSecretsRotatingSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultSecretsRotatingSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_vault_secrets_rotating_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.104.0/docs/resources/vault_secrets_rotating_secret hcp_vault_secrets_rotating_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultSecretsRotatingSecretConfig
  */
  public constructor(scope: Construct, id: string, config: VaultSecretsRotatingSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_vault_secrets_rotating_secret',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.104.0',
        providerVersionConstraint: '~> 0.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._awsAccessKeys.internalValue = config.awsAccessKeys;
    this._azureApplicationPassword.internalValue = config.azureApplicationPassword;
    this._confluentServiceAccount.internalValue = config.confluentServiceAccount;
    this._gcpServiceAccountKey.internalValue = config.gcpServiceAccountKey;
    this._integrationName = config.integrationName;
    this._mongodbAtlasUser.internalValue = config.mongodbAtlasUser;
    this._name = config.name;
    this._projectId = config.projectId;
    this._rotationPolicyName = config.rotationPolicyName;
    this._secretProvider = config.secretProvider;
    this._twilioApiKey.internalValue = config.twilioApiKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // aws_access_keys - computed: false, optional: true, required: false
  private _awsAccessKeys = new VaultSecretsRotatingSecretAwsAccessKeysOutputReference(this, "aws_access_keys");
  public get awsAccessKeys() {
    return this._awsAccessKeys;
  }
  public putAwsAccessKeys(value: VaultSecretsRotatingSecretAwsAccessKeys) {
    this._awsAccessKeys.internalValue = value;
  }
  public resetAwsAccessKeys() {
    this._awsAccessKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeysInput() {
    return this._awsAccessKeys.internalValue;
  }

  // azure_application_password - computed: false, optional: true, required: false
  private _azureApplicationPassword = new VaultSecretsRotatingSecretAzureApplicationPasswordOutputReference(this, "azure_application_password");
  public get azureApplicationPassword() {
    return this._azureApplicationPassword;
  }
  public putAzureApplicationPassword(value: VaultSecretsRotatingSecretAzureApplicationPassword) {
    this._azureApplicationPassword.internalValue = value;
  }
  public resetAzureApplicationPassword() {
    this._azureApplicationPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureApplicationPasswordInput() {
    return this._azureApplicationPassword.internalValue;
  }

  // confluent_service_account - computed: false, optional: true, required: false
  private _confluentServiceAccount = new VaultSecretsRotatingSecretConfluentServiceAccountOutputReference(this, "confluent_service_account");
  public get confluentServiceAccount() {
    return this._confluentServiceAccount;
  }
  public putConfluentServiceAccount(value: VaultSecretsRotatingSecretConfluentServiceAccount) {
    this._confluentServiceAccount.internalValue = value;
  }
  public resetConfluentServiceAccount() {
    this._confluentServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentServiceAccountInput() {
    return this._confluentServiceAccount.internalValue;
  }

  // gcp_service_account_key - computed: false, optional: true, required: false
  private _gcpServiceAccountKey = new VaultSecretsRotatingSecretGcpServiceAccountKeyOutputReference(this, "gcp_service_account_key");
  public get gcpServiceAccountKey() {
    return this._gcpServiceAccountKey;
  }
  public putGcpServiceAccountKey(value: VaultSecretsRotatingSecretGcpServiceAccountKey) {
    this._gcpServiceAccountKey.internalValue = value;
  }
  public resetGcpServiceAccountKey() {
    this._gcpServiceAccountKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountKeyInput() {
    return this._gcpServiceAccountKey.internalValue;
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // mongodb_atlas_user - computed: false, optional: true, required: false
  private _mongodbAtlasUser = new VaultSecretsRotatingSecretMongodbAtlasUserOutputReference(this, "mongodb_atlas_user");
  public get mongodbAtlasUser() {
    return this._mongodbAtlasUser;
  }
  public putMongodbAtlasUser(value: VaultSecretsRotatingSecretMongodbAtlasUser) {
    this._mongodbAtlasUser.internalValue = value;
  }
  public resetMongodbAtlasUser() {
    this._mongodbAtlasUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasUserInput() {
    return this._mongodbAtlasUser.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rotation_policy_name - computed: false, optional: false, required: true
  private _rotationPolicyName?: string; 
  public get rotationPolicyName() {
    return this.getStringAttribute('rotation_policy_name');
  }
  public set rotationPolicyName(value: string) {
    this._rotationPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyNameInput() {
    return this._rotationPolicyName;
  }

  // secret_provider - computed: false, optional: false, required: true
  private _secretProvider?: string; 
  public get secretProvider() {
    return this.getStringAttribute('secret_provider');
  }
  public set secretProvider(value: string) {
    this._secretProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretProviderInput() {
    return this._secretProvider;
  }

  // twilio_api_key - computed: false, optional: true, required: false
  private _twilioApiKey = new VaultSecretsRotatingSecretTwilioApiKeyOutputReference(this, "twilio_api_key");
  public get twilioApiKey() {
    return this._twilioApiKey;
  }
  public putTwilioApiKey(value: VaultSecretsRotatingSecretTwilioApiKey) {
    this._twilioApiKey.internalValue = value;
  }
  public resetTwilioApiKey() {
    this._twilioApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioApiKeyInput() {
    return this._twilioApiKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      aws_access_keys: vaultSecretsRotatingSecretAwsAccessKeysToTerraform(this._awsAccessKeys.internalValue),
      azure_application_password: vaultSecretsRotatingSecretAzureApplicationPasswordToTerraform(this._azureApplicationPassword.internalValue),
      confluent_service_account: vaultSecretsRotatingSecretConfluentServiceAccountToTerraform(this._confluentServiceAccount.internalValue),
      gcp_service_account_key: vaultSecretsRotatingSecretGcpServiceAccountKeyToTerraform(this._gcpServiceAccountKey.internalValue),
      integration_name: cdktf.stringToTerraform(this._integrationName),
      mongodb_atlas_user: vaultSecretsRotatingSecretMongodbAtlasUserToTerraform(this._mongodbAtlasUser.internalValue),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      rotation_policy_name: cdktf.stringToTerraform(this._rotationPolicyName),
      secret_provider: cdktf.stringToTerraform(this._secretProvider),
      twilio_api_key: vaultSecretsRotatingSecretTwilioApiKeyToTerraform(this._twilioApiKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_access_keys: {
        value: vaultSecretsRotatingSecretAwsAccessKeysToHclTerraform(this._awsAccessKeys.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretAwsAccessKeys",
      },
      azure_application_password: {
        value: vaultSecretsRotatingSecretAzureApplicationPasswordToHclTerraform(this._azureApplicationPassword.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretAzureApplicationPassword",
      },
      confluent_service_account: {
        value: vaultSecretsRotatingSecretConfluentServiceAccountToHclTerraform(this._confluentServiceAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretConfluentServiceAccount",
      },
      gcp_service_account_key: {
        value: vaultSecretsRotatingSecretGcpServiceAccountKeyToHclTerraform(this._gcpServiceAccountKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretGcpServiceAccountKey",
      },
      integration_name: {
        value: cdktf.stringToHclTerraform(this._integrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_atlas_user: {
        value: vaultSecretsRotatingSecretMongodbAtlasUserToHclTerraform(this._mongodbAtlasUser.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretMongodbAtlasUser",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_policy_name: {
        value: cdktf.stringToHclTerraform(this._rotationPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_provider: {
        value: cdktf.stringToHclTerraform(this._secretProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      twilio_api_key: {
        value: vaultSecretsRotatingSecretTwilioApiKeyToHclTerraform(this._twilioApiKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultSecretsRotatingSecretTwilioApiKey",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
