// https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePrincipalKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A map of arbitrary string key/value pairs that will force recreation of the key when they change, enabling key based on external conditions such as a rotating timestamp. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key#rotate_triggers ServicePrincipalKey#rotate_triggers}
  */
  readonly rotateTriggers?: { [key: string]: string };
  /**
  * The service principal's resource name for which a key should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key#service_principal ServicePrincipalKey#service_principal}
  */
  readonly servicePrincipal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key hcp_service_principal_key}
*/
export class ServicePrincipalKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_service_principal_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePrincipalKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePrincipalKey to import
  * @param importFromId The id of the existing ServicePrincipalKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePrincipalKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_service_principal_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.97.0/docs/resources/service_principal_key hcp_service_principal_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePrincipalKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePrincipalKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_service_principal_key',
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
    this._rotateTriggers = config.rotateTriggers;
    this._servicePrincipal = config.servicePrincipal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // rotate_triggers - computed: false, optional: true, required: false
  private _rotateTriggers?: { [key: string]: string }; 
  public get rotateTriggers() {
    return this.getStringMapAttribute('rotate_triggers');
  }
  public set rotateTriggers(value: { [key: string]: string }) {
    this._rotateTriggers = value;
  }
  public resetRotateTriggers() {
    this._rotateTriggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateTriggersInput() {
    return this._rotateTriggers;
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
      rotate_triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotateTriggers),
      service_principal: cdktf.stringToTerraform(this._servicePrincipal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rotate_triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotateTriggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
