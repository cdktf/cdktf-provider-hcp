// https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/data-sources/service_principal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcpServicePrincipalConfig extends cdktf.TerraformMetaArguments {
  /**
  * The service principal's resource name in format `iam/project/<project_id>/service-principal/<name>` or `iam/organization/<organization_id>/service-principal/<name>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/data-sources/service_principal#resource_name DataHcpServicePrincipal#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/data-sources/service_principal hcp_service_principal}
*/
export class DataHcpServicePrincipal extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_service_principal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcpServicePrincipal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcpServicePrincipal to import
  * @param importFromId The id of the existing DataHcpServicePrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcpServicePrincipal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_service_principal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/data-sources/service_principal hcp_service_principal} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcpServicePrincipalConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcpServicePrincipalConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_service_principal',
      terraformGeneratorMetadata: {
        providerName: 'hcp',
        providerVersion: '0.90.0',
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
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_name: cdktf.stringToTerraform(this._resourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
