// https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/organization_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/organization_iam_policy#policy_data OrganizationIamPolicy#policy_data}
  */
  readonly policyData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/organization_iam_policy hcp_organization_iam_policy}
*/
export class OrganizationIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_organization_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationIamPolicy to import
  * @param importFromId The id of the existing OrganizationIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/organization_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_organization_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.77.0/docs/resources/organization_iam_policy hcp_organization_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_organization_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.77.0',
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
    this._policyData = config.policyData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_data: cdktf.stringToTerraform(this._policyData),
    };
  }
}
