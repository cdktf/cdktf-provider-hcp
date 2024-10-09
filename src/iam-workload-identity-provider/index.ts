/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkloadIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#aws IamWorkloadIdentityProvider#aws}
  */
  readonly aws?: IamWorkloadIdentityProviderAws;
  /**
  * conditional_access is a hashicorp/go-bexpr string that is evaluated when exchanging tokens. It restricts which upstream identities are allowed to access the service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#conditional_access IamWorkloadIdentityProvider#conditional_access}
  */
  readonly conditionalAccess: string;
  /**
  * A description for the workload identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#description IamWorkloadIdentityProvider#description}
  */
  readonly description?: string;
  /**
  * The workload identity provider's name. Ideally, this should be descriptive of the workload being federated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#name IamWorkloadIdentityProvider#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#oidc IamWorkloadIdentityProvider#oidc}
  */
  readonly oidc?: IamWorkloadIdentityProviderOidc;
  /**
  * The service principal's resource name for which the workload identity provider will be created for. Only service principals created within a project are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#service_principal IamWorkloadIdentityProvider#service_principal}
  */
  readonly servicePrincipal: string;
}
export interface IamWorkloadIdentityProviderAws {
  /**
  * The AWS Account ID that is allowed to exchange workload identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#account_id IamWorkloadIdentityProvider#account_id}
  */
  readonly accountId: string;
}

export function iamWorkloadIdentityProviderAwsToTerraform(struct?: IamWorkloadIdentityProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
  }
}


export function iamWorkloadIdentityProviderAwsToHclTerraform(struct?: IamWorkloadIdentityProviderAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityProviderAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkloadIdentityProviderAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityProviderAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }
}
export interface IamWorkloadIdentityProviderOidc {
  /**
  * allowed_audiences is the set of audiences set on the access token that are allowed to exchange identities. The access token must have an audience that is contained in this set. If no audience is set, the default allowed audience will be the resource name of the WorkloadIdentityProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#allowed_audiences IamWorkloadIdentityProvider#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The URL of the OIDC Issuer that is allowed to exchange workload identities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#issuer_uri IamWorkloadIdentityProvider#issuer_uri}
  */
  readonly issuerUri: string;
}

export function iamWorkloadIdentityProviderOidcToTerraform(struct?: IamWorkloadIdentityProviderOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
  }
}


export function iamWorkloadIdentityProviderOidcToHclTerraform(struct?: IamWorkloadIdentityProviderOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer_uri: {
      value: cdktf.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityProviderOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkloadIdentityProviderOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityProviderOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedAudiences = undefined;
      this._issuerUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedAudiences = value.allowedAudiences;
      this._issuerUri = value.issuerUri;
    }
  }

  // allowed_audiences - computed: true, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_audiences'));
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider}
*/
export class IamWorkloadIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_iam_workload_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkloadIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkloadIdentityProvider to import
  * @param importFromId The id of the existing IamWorkloadIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkloadIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_iam_workload_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/iam_workload_identity_provider hcp_iam_workload_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkloadIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkloadIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_iam_workload_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.97.0',
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
    this._aws.internalValue = config.aws;
    this._conditionalAccess = config.conditionalAccess;
    this._description = config.description;
    this._name = config.name;
    this._oidc.internalValue = config.oidc;
    this._servicePrincipal = config.servicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws - computed: false, optional: true, required: false
  private _aws = new IamWorkloadIdentityProviderAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: IamWorkloadIdentityProviderAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // conditional_access - computed: false, optional: false, required: true
  private _conditionalAccess?: string; 
  public get conditionalAccess() {
    return this.getStringAttribute('conditional_access');
  }
  public set conditionalAccess(value: string) {
    this._conditionalAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAccessInput() {
    return this._conditionalAccess;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IamWorkloadIdentityProviderOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IamWorkloadIdentityProviderOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // service_principal - computed: false, optional: false, required: true
  private _servicePrincipal?: string; 
  public get servicePrincipal() {
    return this.getStringAttribute('service_principal');
  }
  public set servicePrincipal(value: string) {
    this._servicePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws: iamWorkloadIdentityProviderAwsToTerraform(this._aws.internalValue),
      conditional_access: cdktf.stringToTerraform(this._conditionalAccess),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      oidc: iamWorkloadIdentityProviderOidcToTerraform(this._oidc.internalValue),
      service_principal: cdktf.stringToTerraform(this._servicePrincipal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws: {
        value: iamWorkloadIdentityProviderAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkloadIdentityProviderAws",
      },
      conditional_access: {
        value: cdktf.stringToHclTerraform(this._conditionalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc: {
        value: iamWorkloadIdentityProviderOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkloadIdentityProviderOidc",
      },
      service_principal: {
        value: cdktf.stringToHclTerraform(this._servicePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
