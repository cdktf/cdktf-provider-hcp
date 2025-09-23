/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of consumer accounts allowed to connect to the private link. In AWS, these are IAM Principals. In Azure, these are Azure Subscription/Resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#consumer_accounts PrivateLink#consumer_accounts}
  */
  readonly consumerAccounts?: string[];
  /**
  * The list of consumer IP ranges or CIDRs allowed to connect to the HVD cluster associated with the private link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#consumer_ip_ranges PrivateLink#consumer_ip_ranges}
  */
  readonly consumerIpRanges?: string[];
  /**
  * The cloud provider regions from which consumers can connect to the private link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#consumer_regions PrivateLink#consumer_regions}
  */
  readonly consumerRegions?: string[];
  /**
  * The ID of the HVN associated with the private link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#hvn_id PrivateLink#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#id PrivateLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the private link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#private_link_id PrivateLink#private_link_id}
  */
  readonly privateLinkId: string;
  /**
  * The ID of the HCP project where the private link is located. If not specified, the project configured in the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#project_id PrivateLink#project_id}
  */
  readonly projectId?: string;
  /**
  * The ID of the HCP Vault cluster associated with the private link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#vault_cluster_id PrivateLink#vault_cluster_id}
  */
  readonly vaultClusterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#timeouts PrivateLink#timeouts}
  */
  readonly timeouts?: PrivateLinkTimeouts;
}
export interface PrivateLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#create PrivateLink#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#default PrivateLink#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#delete PrivateLink#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#update PrivateLink#update}
  */
  readonly update?: string;
}

export function privateLinkTimeoutsToTerraform(struct?: PrivateLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function privateLinkTimeoutsToHclTerraform(struct?: PrivateLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateLinkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateLinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link hcp_private_link}
*/
export class PrivateLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_private_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateLink to import
  * @param importFromId The id of the existing PrivateLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_private_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/resources/private_link hcp_private_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateLinkConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_private_link',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.110.0',
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
    this._consumerAccounts = config.consumerAccounts;
    this._consumerIpRanges = config.consumerIpRanges;
    this._consumerRegions = config.consumerRegions;
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._privateLinkId = config.privateLinkId;
    this._projectId = config.projectId;
    this._vaultClusterId = config.vaultClusterId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_accounts - computed: false, optional: true, required: false
  private _consumerAccounts?: string[]; 
  public get consumerAccounts() {
    return this.getListAttribute('consumer_accounts');
  }
  public set consumerAccounts(value: string[]) {
    this._consumerAccounts = value;
  }
  public resetConsumerAccounts() {
    this._consumerAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerAccountsInput() {
    return this._consumerAccounts;
  }

  // consumer_ip_ranges - computed: false, optional: true, required: false
  private _consumerIpRanges?: string[]; 
  public get consumerIpRanges() {
    return this.getListAttribute('consumer_ip_ranges');
  }
  public set consumerIpRanges(value: string[]) {
    this._consumerIpRanges = value;
  }
  public resetConsumerIpRanges() {
    this._consumerIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIpRangesInput() {
    return this._consumerIpRanges;
  }

  // consumer_regions - computed: false, optional: true, required: false
  private _consumerRegions?: string[]; 
  public get consumerRegions() {
    return this.getListAttribute('consumer_regions');
  }
  public set consumerRegions(value: string[]) {
    this._consumerRegions = value;
  }
  public resetConsumerRegions() {
    this._consumerRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRegionsInput() {
    return this._consumerRegions;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_region - computed: true, optional: false, required: false
  public get defaultRegion() {
    return this.getStringAttribute('default_region');
  }

  // external_name - computed: true, optional: false, required: false
  public get externalName() {
    return this.getStringAttribute('external_name');
  }

  // hvn_id - computed: false, optional: false, required: true
  private _hvnId?: string; 
  public get hvnId() {
    return this.getStringAttribute('hvn_id');
  }
  public set hvnId(value: string) {
    this._hvnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hvnIdInput() {
    return this._hvnId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // private_link_id - computed: false, optional: false, required: true
  private _privateLinkId?: string; 
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }
  public set privateLinkId(value: string) {
    this._privateLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkIdInput() {
    return this._privateLinkId;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // vault_cluster_id - computed: false, optional: false, required: true
  private _vaultClusterId?: string; 
  public get vaultClusterId() {
    return this.getStringAttribute('vault_cluster_id');
  }
  public set vaultClusterId(value: string) {
    this._vaultClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultClusterIdInput() {
    return this._vaultClusterId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivateLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivateLinkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerAccounts),
      consumer_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerIpRanges),
      consumer_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerRegions),
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      private_link_id: cdktf.stringToTerraform(this._privateLinkId),
      project_id: cdktf.stringToTerraform(this._projectId),
      vault_cluster_id: cdktf.stringToTerraform(this._vaultClusterId),
      timeouts: privateLinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      consumer_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      consumer_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hvn_id: {
        value: cdktf.stringToHclTerraform(this._hvnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_id: {
        value: cdktf.stringToHclTerraform(this._privateLinkId),
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
      vault_cluster_id: {
        value: cdktf.stringToHclTerraform(this._vaultClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: privateLinkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateLinkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
