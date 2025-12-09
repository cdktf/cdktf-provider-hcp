/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpDnsForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the DNS forwarding configuration this rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_id DataHcpDnsForwardingRule#dns_forwarding_id}
  */
  readonly dnsForwardingId: string;
  /**
  * The ID of the DNS forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#dns_forwarding_rule_id DataHcpDnsForwardingRule#dns_forwarding_rule_id}
  */
  readonly dnsForwardingRuleId: string;
  /**
  * The ID of the HVN that this DNS forwarding rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#hvn_id DataHcpDnsForwardingRule#hvn_id}
  */
  readonly hvnId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#id DataHcpDnsForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 
  * The ID of the HCP project where the DNS forwarding rule is located.
  * If not specified, the project specified in the HCP Provider config block will be used, if configured.
  * If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#project_id DataHcpDnsForwardingRule#project_id}
  */
  readonly projectId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule hcp_dns_forwarding_rule}
*/
export class DataHcpDnsForwardingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_dns_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpDnsForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpDnsForwardingRule to import
  * @param importFromId The id of the existing DataHcpDnsForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpDnsForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_dns_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/data-sources/dns_forwarding_rule hcp_dns_forwarding_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpDnsForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpDnsForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_dns_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.111.0',
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
    this._dnsForwardingId = config.dnsForwardingId;
    this._dnsForwardingRuleId = config.dnsForwardingRuleId;
    this._hvnId = config.hvnId;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_forwarding_id - computed: false, optional: false, required: true
  private _dnsForwardingId?: string; 
  public get dnsForwardingId() {
    return this.getStringAttribute('dns_forwarding_id');
  }
  public set dnsForwardingId(value: string) {
    this._dnsForwardingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwardingIdInput() {
    return this._dnsForwardingId;
  }

  // dns_forwarding_rule_id - computed: false, optional: false, required: true
  private _dnsForwardingRuleId?: string; 
  public get dnsForwardingRuleId() {
    return this.getStringAttribute('dns_forwarding_rule_id');
  }
  public set dnsForwardingRuleId(value: string) {
    this._dnsForwardingRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwardingRuleIdInput() {
    return this._dnsForwardingRuleId;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // inbound_endpoint_ips - computed: true, optional: false, required: false
  public get inboundEndpointIps() {
    return this.getListAttribute('inbound_endpoint_ips');
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_forwarding_id: cdktf.stringToTerraform(this._dnsForwardingId),
      dns_forwarding_rule_id: cdktf.stringToTerraform(this._dnsForwardingRuleId),
      hvn_id: cdktf.stringToTerraform(this._hvnId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_forwarding_id: {
        value: cdktf.stringToHclTerraform(this._dnsForwardingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_forwarding_rule_id: {
        value: cdktf.stringToHclTerraform(this._dnsForwardingRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
