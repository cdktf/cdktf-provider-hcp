# `waypointAddOnDefinition` Submodule <a name="`waypointAddOnDefinition` Submodule" id="@cdktf/provider-hcp.waypointAddOnDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointAddOnDefinition <a name="WaypointAddOnDefinition" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition hcp_waypoint_add_on_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  summary: str,
  terraform_no_code_module_id: str,
  terraform_no_code_module_source: str,
  terraform_project_id: str,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None,
  terraform_agent_pool_id: str = None,
  terraform_cloud_workspace_details: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails = None,
  terraform_execution_mode: str = None,
  variable_options: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.description">description</a></code> | <code>str</code> | A longer description of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.summary">summary</a></code> | <code>str</code> | A short summary of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleId">terraform_no_code_module_id</a></code> | <code>str</code> | The ID of the Terraform no-code module to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | The markdown template for the Add-on Definition README (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | The ID of the Terraform agent pool to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.variableOptions">variable_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]</code> | List of variable options for the Add-on Definition. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.description"></a>

- *Type:* str

A longer description of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.name"></a>

- *Type:* str

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.summary"></a>

- *Type:* str

A short summary of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}

---

##### `terraform_no_code_module_id`<sup>Required</sup> <a name="terraform_no_code_module_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleId"></a>

- *Type:* str

The ID of the Terraform no-code module to use for running Terraform operations.

This is in the format of 'nocode-<ID>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_id WaypointAddOnDefinition#terraform_no_code_module_id}

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformNoCodeModuleSource"></a>

- *Type:* str

Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformProjectId"></a>

- *Type:* str

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

List of labels attached to this Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.readmeMarkdownTemplate"></a>

- *Type:* str

The markdown template for the Add-on Definition README (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}

---

##### `terraform_agent_pool_id`<sup>Optional</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformAgentPoolId"></a>

- *Type:* str

The ID of the Terraform agent pool to use for running Terraform operations.

This is only applicable when the execution mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}

---

##### `terraform_cloud_workspace_details`<sup>Optional</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformCloudWorkspaceDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}

---

##### `terraform_execution_mode`<sup>Optional</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.terraformExecutionMode"></a>

- *Type:* str

The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}

---

##### `variable_options`<sup>Optional</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.Initializer.parameter.variableOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]

List of variable options for the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails">put_terraform_cloud_workspace_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions">put_variable_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate">reset_readme_markdown_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId">reset_terraform_agent_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails">reset_terraform_cloud_workspace_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode">reset_terraform_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions">reset_variable_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terraform_cloud_workspace_details` <a name="put_terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails"></a>

```python
def put_terraform_cloud_workspace_details(
  name: str,
  terraform_project_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails.parameter.name"></a>

- *Type:* str

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

###### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putTerraformCloudWorkspaceDetails.parameter.terraformProjectId"></a>

- *Type:* str

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `put_variable_options` <a name="put_variable_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions"></a>

```python
def put_variable_options(
  value: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.putVariableOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_readme_markdown_template` <a name="reset_readme_markdown_template" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetReadmeMarkdownTemplate"></a>

```python
def reset_readme_markdown_template() -> None
```

##### `reset_terraform_agent_pool_id` <a name="reset_terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformAgentPoolId"></a>

```python
def reset_terraform_agent_pool_id() -> None
```

##### `reset_terraform_cloud_workspace_details` <a name="reset_terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformCloudWorkspaceDetails"></a>

```python
def reset_terraform_cloud_workspace_details() -> None
```

##### `reset_terraform_execution_mode` <a name="reset_terraform_execution_mode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetTerraformExecutionMode"></a>

```python
def reset_terraform_execution_mode() -> None
```

##### `reset_variable_options` <a name="reset_variable_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.resetVariableOptions"></a>

```python
def reset_variable_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinition.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaypointAddOnDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaypointAddOnDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaypointAddOnDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointAddOnDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions">variable_options</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput">readme_markdown_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput">terraform_agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput">terraform_cloud_workspace_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput">terraform_execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleIdInput">terraform_no_code_module_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput">terraform_no_code_module_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput">terraform_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput">variable_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleId">terraform_no_code_module_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference">WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `variable_options`<sup>Required</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptions"></a>

```python
variable_options: WaypointAddOnDefinitionVariableOptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList">WaypointAddOnDefinitionVariableOptionsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `readme_markdown_template_input`<sup>Optional</sup> <a name="readme_markdown_template_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplateInput"></a>

```python
readme_markdown_template_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `terraform_agent_pool_id_input`<sup>Optional</sup> <a name="terraform_agent_pool_id_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolIdInput"></a>

```python
terraform_agent_pool_id_input: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details_input`<sup>Optional</sup> <a name="terraform_cloud_workspace_details_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformCloudWorkspaceDetailsInput"></a>

```python
terraform_cloud_workspace_details_input: typing.Union[IResolvable, WaypointAddOnDefinitionTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>]

---

##### `terraform_execution_mode_input`<sup>Optional</sup> <a name="terraform_execution_mode_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionModeInput"></a>

```python
terraform_execution_mode_input: str
```

- *Type:* str

---

##### `terraform_no_code_module_id_input`<sup>Optional</sup> <a name="terraform_no_code_module_id_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleIdInput"></a>

```python
terraform_no_code_module_id_input: str
```

- *Type:* str

---

##### `terraform_no_code_module_source_input`<sup>Optional</sup> <a name="terraform_no_code_module_source_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSourceInput"></a>

```python
terraform_no_code_module_source_input: str
```

- *Type:* str

---

##### `terraform_project_id_input`<sup>Optional</sup> <a name="terraform_project_id_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectIdInput"></a>

```python
terraform_project_id_input: str
```

- *Type:* str

---

##### `variable_options_input`<sup>Optional</sup> <a name="variable_options_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.variableOptionsInput"></a>

```python
variable_options_input: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `readme_markdown_template`<sup>Required</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `terraform_agent_pool_id`<sup>Required</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformAgentPoolId"></a>

```python
terraform_agent_pool_id: str
```

- *Type:* str

---

##### `terraform_execution_mode`<sup>Required</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformExecutionMode"></a>

```python
terraform_execution_mode: str
```

- *Type:* str

---

##### `terraform_no_code_module_id`<sup>Required</sup> <a name="terraform_no_code_module_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleId"></a>

```python
terraform_no_code_module_id: str
```

- *Type:* str

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformNoCodeModuleSource"></a>

```python
terraform_no_code_module_source: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointAddOnDefinitionConfig <a name="WaypointAddOnDefinitionConfig" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  name: str,
  summary: str,
  terraform_no_code_module_id: str,
  terraform_no_code_module_source: str,
  terraform_project_id: str,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None,
  terraform_agent_pool_id: str = None,
  terraform_cloud_workspace_details: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails = None,
  terraform_execution_mode: str = None,
  variable_options: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description">description</a></code> | <code>str</code> | A longer description of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name">name</a></code> | <code>str</code> | The name of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary">summary</a></code> | <code>str</code> | A short summary of the Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleId">terraform_no_code_module_id</a></code> | <code>str</code> | The ID of the Terraform no-code module to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws". |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Add-on Definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Add-on Definition is located. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | The markdown template for the Add-on Definition README (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | The ID of the Terraform agent pool to use for running Terraform operations. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions">variable_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]</code> | List of variable options for the Add-on Definition. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A longer description of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#description WaypointAddOnDefinition#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

A short summary of the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#summary WaypointAddOnDefinition#summary}

---

##### `terraform_no_code_module_id`<sup>Required</sup> <a name="terraform_no_code_module_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleId"></a>

```python
terraform_no_code_module_id: str
```

- *Type:* str

The ID of the Terraform no-code module to use for running Terraform operations.

This is in the format of 'nocode-<ID>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_id WaypointAddOnDefinition#terraform_no_code_module_id}

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformNoCodeModuleSource"></a>

```python
terraform_no_code_module_source: str
```

- *Type:* str

Terraform Cloud no-code Module Source, expected to be in one of the following formats: "app.terraform.io/hcp_waypoint_example/ecs-advanced-microservice/aws" or "private/hcp_waypoint_example/ecs-advanced-microservice/aws".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_no_code_module_source WaypointAddOnDefinition#terraform_no_code_module_source}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

List of labels attached to this Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#labels WaypointAddOnDefinition#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Add-on Definition is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#project_id WaypointAddOnDefinition#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

The markdown template for the Add-on Definition README (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#readme_markdown_template WaypointAddOnDefinition#readme_markdown_template}

---

##### `terraform_agent_pool_id`<sup>Optional</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformAgentPoolId"></a>

```python
terraform_agent_pool_id: str
```

- *Type:* str

The ID of the Terraform agent pool to use for running Terraform operations.

This is only applicable when the execution mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_agent_pool_id WaypointAddOnDefinition#terraform_agent_pool_id}

---

##### `terraform_cloud_workspace_details`<sup>Optional</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointAddOnDefinitionTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details. If not provided, defaults to the HCP Terraform project of the associated application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_cloud_workspace_details WaypointAddOnDefinition#terraform_cloud_workspace_details}

---

##### `terraform_execution_mode`<sup>Optional</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.terraformExecutionMode"></a>

```python
terraform_execution_mode: str
```

- *Type:* str

The execution mode of the HCP Terraform workspaces for add-ons using this add-on definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_execution_mode WaypointAddOnDefinition#terraform_execution_mode}

---

##### `variable_options`<sup>Optional</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionConfig.property.variableOptions"></a>

```python
variable_options: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]

List of variable options for the Add-on Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#variable_options WaypointAddOnDefinition#variable_options}

---

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetails <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails(
  name: str,
  terraform_project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>str</code> | Name of the Terraform Cloud Project. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | Terraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#terraform_project_id WaypointAddOnDefinition#terraform_project_id}

---

### WaypointAddOnDefinitionVariableOptions <a name="WaypointAddOnDefinitionVariableOptions" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions(
  name: str,
  variable_type: str,
  options: typing.List[str] = None,
  user_editable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name">name</a></code> | <code>str</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType">variable_type</a></code> | <code>str</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options">options</a></code> | <code>typing.List[str]</code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable">user_editable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the variable is editable by the user creating an add-on. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.name"></a>

```python
name: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#name WaypointAddOnDefinition#name}

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#variable_type WaypointAddOnDefinition#variable_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#options WaypointAddOnDefinition#options}

---

##### `user_editable`<sup>Optional</sup> <a name="user_editable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions.property.userEditable"></a>

```python
user_editable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the variable is editable by the user creating an add-on.

If options are provided, then the user may only use those options, regardless of this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.109.0/docs/resources/waypoint_add_on_definition#user_editable WaypointAddOnDefinition#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraform_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `terraform_project_id_input`<sup>Optional</sup> <a name="terraform_project_id_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```python
terraform_project_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointAddOnDefinitionTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionTerraformCloudWorkspaceDetails">WaypointAddOnDefinitionTerraformCloudWorkspaceDetails</a>]

---


### WaypointAddOnDefinitionVariableOptionsList <a name="WaypointAddOnDefinitionVariableOptionsList" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaypointAddOnDefinitionVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WaypointAddOnDefinitionVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]]

---


### WaypointAddOnDefinitionVariableOptionsOutputReference <a name="WaypointAddOnDefinitionVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_add_on_definition

waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable">reset_user_editable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_user_editable` <a name="reset_user_editable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.resetUserEditable"></a>

```python
def reset_user_editable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput">user_editable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable">user_editable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_editable_input`<sup>Optional</sup> <a name="user_editable_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditableInput"></a>

```python
user_editable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_editable`<sup>Required</sup> <a name="user_editable" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.userEditable"></a>

```python
user_editable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointAddOnDefinitionVariableOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointAddOnDefinition.WaypointAddOnDefinitionVariableOptions">WaypointAddOnDefinitionVariableOptions</a>]

---



