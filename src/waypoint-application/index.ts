// https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaypointApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Application Template this Application is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application#application_template_id WaypointApplication#application_template_id}
  */
  readonly applicationTemplateId: string;
  /**
  * The name of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application#name WaypointApplication#name}
  */
  readonly name: string;
  /**
  * The ID of the HCP project where the Waypoint Application is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application#project_id WaypointApplication#project_id}
  */
  readonly projectId?: string;
  /**
  * Instructions for using the Application (markdown format supported). Note: this is a base64 encoded string, and can only be set in configuration after initial creation. The initial version of the README is generated from the README Template from source Application Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application#readme_markdown WaypointApplication#readme_markdown}
  */
  readonly readmeMarkdown?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application hcp_waypoint_application}
*/
export class WaypointApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcp_waypoint_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaypointApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaypointApplication to import
  * @param importFromId The id of the existing WaypointApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaypointApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcp_waypoint_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/hcp/0.90.0/docs/resources/waypoint_application hcp_waypoint_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaypointApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: WaypointApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'hcp_waypoint_application',
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
    this._applicationTemplateId = config.applicationTemplateId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._readmeMarkdown = config.readmeMarkdown;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_template_id - computed: false, optional: false, required: true
  private _applicationTemplateId?: string; 
  public get applicationTemplateId() {
    return this.getStringAttribute('application_template_id');
  }
  public set applicationTemplateId(value: string) {
    this._applicationTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTemplateIdInput() {
    return this._applicationTemplateId;
  }

  // application_template_name - computed: true, optional: false, required: false
  public get applicationTemplateName() {
    return this.getStringAttribute('application_template_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
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

  // readme_markdown - computed: true, optional: true, required: false
  private _readmeMarkdown?: string; 
  public get readmeMarkdown() {
    return this.getStringAttribute('readme_markdown');
  }
  public set readmeMarkdown(value: string) {
    this._readmeMarkdown = value;
  }
  public resetReadmeMarkdown() {
    this._readmeMarkdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeMarkdownInput() {
    return this._readmeMarkdown;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_template_id: cdktf.stringToTerraform(this._applicationTemplateId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      readme_markdown: cdktf.stringToTerraform(this._readmeMarkdown),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_template_id: {
        value: cdktf.stringToHclTerraform(this._applicationTemplateId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readme_markdown: {
        value: cdktf.stringToHclTerraform(this._readmeMarkdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
