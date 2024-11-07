# `waypointTemplate` Submodule <a name="`waypointTemplate` Submodule" id="@cdktf/provider-hcp.waypointTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointTemplate <a name="WaypointTemplate" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template hcp_waypoint_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  summary: str,
  terraform_no_code_module_source: str,
  terraform_project_id: str,
  description: str = None,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None,
  terraform_agent_pool_id: str = None,
  terraform_cloud_workspace_details: WaypointTemplateTerraformCloudWorkspaceDetails = None,
  terraform_execution_mode: str = None,
  use_module_readme: typing.Union[bool, IResolvable] = None,
  variable_options: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.summary">summary</a></code> | <code>str</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | Instructions for using the template (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | The execution mode of the HCP Terraform workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.useModuleReadme">use_module_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will auto-import the readme form the Terraform odule used. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.variableOptions">variable_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]</code> | List of variable options for the template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.summary"></a>

- *Type:* str

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#summary WaypointTemplate#summary}

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformNoCodeModuleSource"></a>

- *Type:* str

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_no_code_module_source WaypointTemplate#terraform_no_code_module_source}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformProjectId"></a>

- *Type:* str

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.description"></a>

- *Type:* str

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#description WaypointTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

List of labels attached to this Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#labels WaypointTemplate#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#project_id WaypointTemplate#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.readmeMarkdownTemplate"></a>

- *Type:* str

Instructions for using the template (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#readme_markdown_template WaypointTemplate#readme_markdown_template}

---

##### `terraform_agent_pool_id`<sup>Optional</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformAgentPoolId"></a>

- *Type:* str

The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template.

Required if terraform_execution_mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_agent_pool_id WaypointTemplate#terraform_agent_pool_id}

---

##### `terraform_cloud_workspace_details`<sup>Optional</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformCloudWorkspaceDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_cloud_workspace_details WaypointTemplate#terraform_cloud_workspace_details}

---

##### `terraform_execution_mode`<sup>Optional</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.terraformExecutionMode"></a>

- *Type:* str

The execution mode of the HCP Terraform workspaces created for applications using this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_execution_mode WaypointTemplate#terraform_execution_mode}

---

##### `use_module_readme`<sup>Optional</sup> <a name="use_module_readme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.useModuleReadme"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will auto-import the readme form the Terraform odule used.

If this is set to true, users should not also set `readme_markdown_template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#use_module_readme WaypointTemplate#use_module_readme}

---

##### `variable_options`<sup>Optional</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.Initializer.parameter.variableOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]

List of variable options for the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#variable_options WaypointTemplate#variable_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails">put_terraform_cloud_workspace_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions">put_variable_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetReadmeMarkdownTemplate">reset_readme_markdown_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformAgentPoolId">reset_terraform_agent_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformCloudWorkspaceDetails">reset_terraform_cloud_workspace_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformExecutionMode">reset_terraform_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetUseModuleReadme">reset_use_module_readme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetVariableOptions">reset_variable_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terraform_cloud_workspace_details` <a name="put_terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails"></a>

```python
def put_terraform_cloud_workspace_details(
  name: str,
  terraform_project_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails.parameter.name"></a>

- *Type:* str

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}

---

###### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putTerraformCloudWorkspaceDetails.parameter.terraformProjectId"></a>

- *Type:* str

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

##### `put_variable_options` <a name="put_variable_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions"></a>

```python
def put_variable_options(
  value: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.putVariableOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_readme_markdown_template` <a name="reset_readme_markdown_template" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetReadmeMarkdownTemplate"></a>

```python
def reset_readme_markdown_template() -> None
```

##### `reset_terraform_agent_pool_id` <a name="reset_terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformAgentPoolId"></a>

```python
def reset_terraform_agent_pool_id() -> None
```

##### `reset_terraform_cloud_workspace_details` <a name="reset_terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformCloudWorkspaceDetails"></a>

```python
def reset_terraform_cloud_workspace_details() -> None
```

##### `reset_terraform_execution_mode` <a name="reset_terraform_execution_mode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetTerraformExecutionMode"></a>

```python
def reset_terraform_execution_mode() -> None
```

##### `reset_use_module_readme` <a name="reset_use_module_readme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetUseModuleReadme"></a>

```python
def reset_use_module_readme() -> None
```

##### `reset_variable_options` <a name="reset_variable_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.resetVariableOptions"></a>

```python
def reset_variable_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaypointTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaypointTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaypointTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaypointTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptions">variable_options</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList">WaypointTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplateInput">readme_markdown_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolIdInput">terraform_agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetailsInput">terraform_cloud_workspace_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionModeInput">terraform_execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSourceInput">terraform_no_code_module_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectIdInput">terraform_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadmeInput">use_module_readme_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptionsInput">variable_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadme">use_module_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `variable_options`<sup>Required</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptions"></a>

```python
variable_options: WaypointTemplateVariableOptionsList
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList">WaypointTemplateVariableOptionsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `readme_markdown_template_input`<sup>Optional</sup> <a name="readme_markdown_template_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplateInput"></a>

```python
readme_markdown_template_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `terraform_agent_pool_id_input`<sup>Optional</sup> <a name="terraform_agent_pool_id_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolIdInput"></a>

```python
terraform_agent_pool_id_input: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details_input`<sup>Optional</sup> <a name="terraform_cloud_workspace_details_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```python
terraform_cloud_workspace_details_input: typing.Union[IResolvable, WaypointTemplateTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>]

---

##### `terraform_execution_mode_input`<sup>Optional</sup> <a name="terraform_execution_mode_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionModeInput"></a>

```python
terraform_execution_mode_input: str
```

- *Type:* str

---

##### `terraform_no_code_module_source_input`<sup>Optional</sup> <a name="terraform_no_code_module_source_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSourceInput"></a>

```python
terraform_no_code_module_source_input: str
```

- *Type:* str

---

##### `terraform_project_id_input`<sup>Optional</sup> <a name="terraform_project_id_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectIdInput"></a>

```python
terraform_project_id_input: str
```

- *Type:* str

---

##### `use_module_readme_input`<sup>Optional</sup> <a name="use_module_readme_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadmeInput"></a>

```python
use_module_readme_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variable_options_input`<sup>Optional</sup> <a name="variable_options_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.variableOptionsInput"></a>

```python
variable_options_input: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `readme_markdown_template`<sup>Required</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `terraform_agent_pool_id`<sup>Required</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformAgentPoolId"></a>

```python
terraform_agent_pool_id: str
```

- *Type:* str

---

##### `terraform_execution_mode`<sup>Required</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformExecutionMode"></a>

```python
terraform_execution_mode: str
```

- *Type:* str

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformNoCodeModuleSource"></a>

```python
terraform_no_code_module_source: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

##### `use_module_readme`<sup>Required</sup> <a name="use_module_readme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.useModuleReadme"></a>

```python
use_module_readme: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointTemplateConfig <a name="WaypointTemplateConfig" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  summary: str,
  terraform_no_code_module_source: str,
  terraform_project_id: str,
  description: str = None,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None,
  terraform_agent_pool_id: str = None,
  terraform_cloud_workspace_details: WaypointTemplateTerraformCloudWorkspaceDetails = None,
  terraform_execution_mode: str = None,
  use_module_readme: typing.Union[bool, IResolvable] = None,
  variable_options: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.summary">summary</a></code> | <code>str</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformNoCodeModuleSource">terraform_no_code_module_source</a></code> | <code>str</code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | The ID of the Terraform Cloud Project to create workspaces in. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.description">description</a></code> | <code>str</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | Instructions for using the template (markdown format supported). |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformAgentPoolId">terraform_agent_pool_id</a></code> | <code>str</code> | The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformExecutionMode">terraform_execution_mode</a></code> | <code>str</code> | The execution mode of the HCP Terraform workspaces created for applications using this template. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.useModuleReadme">use_module_readme</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, will auto-import the readme form the Terraform odule used. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.variableOptions">variable_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]</code> | List of variable options for the template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#summary WaypointTemplate#summary}

---

##### `terraform_no_code_module_source`<sup>Required</sup> <a name="terraform_no_code_module_source" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformNoCodeModuleSource"></a>

```python
terraform_no_code_module_source: str
```

- *Type:* str

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_no_code_module_source WaypointTemplate#terraform_no_code_module_source}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

The ID of the Terraform Cloud Project to create workspaces in.

The ID is found on the Terraform Cloud Project settings page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#description WaypointTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

List of labels attached to this Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#labels WaypointTemplate#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#project_id WaypointTemplate#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

Instructions for using the template (markdown format supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#readme_markdown_template WaypointTemplate#readme_markdown_template}

---

##### `terraform_agent_pool_id`<sup>Optional</sup> <a name="terraform_agent_pool_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformAgentPoolId"></a>

```python
terraform_agent_pool_id: str
```

- *Type:* str

The ID of the agent pool to use for Terraform operations, for workspaces created for applications using this template.

Required if terraform_execution_mode is set to 'agent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_agent_pool_id WaypointTemplate#terraform_agent_pool_id}

---

##### `terraform_cloud_workspace_details`<sup>Optional</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointTemplateTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_cloud_workspace_details WaypointTemplate#terraform_cloud_workspace_details}

---

##### `terraform_execution_mode`<sup>Optional</sup> <a name="terraform_execution_mode" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.terraformExecutionMode"></a>

```python
terraform_execution_mode: str
```

- *Type:* str

The execution mode of the HCP Terraform workspaces created for applications using this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_execution_mode WaypointTemplate#terraform_execution_mode}

---

##### `use_module_readme`<sup>Optional</sup> <a name="use_module_readme" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.useModuleReadme"></a>

```python
use_module_readme: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, will auto-import the readme form the Terraform odule used.

If this is set to true, users should not also set `readme_markdown_template`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#use_module_readme WaypointTemplate#use_module_readme}

---

##### `variable_options`<sup>Optional</sup> <a name="variable_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateConfig.property.variableOptions"></a>

```python
variable_options: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]

List of variable options for the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#variable_options WaypointTemplate#variable_options}

---

### WaypointTemplateTerraformCloudWorkspaceDetails <a name="WaypointTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails(
  name: str,
  terraform_project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>str</code> | Name of the Terraform Cloud Project. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | Terraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Terraform Cloud Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#terraform_project_id WaypointTemplate#terraform_project_id}

---

### WaypointTemplateVariableOptions <a name="WaypointTemplateVariableOptions" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateVariableOptions(
  name: str,
  variable_type: str,
  options: typing.List[str] = None,
  user_editable: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.name">name</a></code> | <code>str</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.variableType">variable_type</a></code> | <code>str</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.options">options</a></code> | <code>typing.List[str]</code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.userEditable">user_editable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the variable is editable by the user creating an application. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.name"></a>

```python
name: str
```

- *Type:* str

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#name WaypointTemplate#name}

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#variable_type WaypointTemplate#variable_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#options WaypointTemplate#options}

---

##### `user_editable`<sup>Optional</sup> <a name="user_editable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions.property.userEditable"></a>

```python
user_editable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the variable is editable by the user creating an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.98.1/docs/resources/waypoint_template#user_editable WaypointTemplate#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraform_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `terraform_project_id_input`<sup>Optional</sup> <a name="terraform_project_id_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```python
terraform_project_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointTemplateTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateTerraformCloudWorkspaceDetails">WaypointTemplateTerraformCloudWorkspaceDetails</a>]

---


### WaypointTemplateVariableOptionsList <a name="WaypointTemplateVariableOptionsList" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateVariableOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WaypointTemplateVariableOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WaypointTemplateVariableOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]]

---


### WaypointTemplateVariableOptionsOutputReference <a name="WaypointTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_template

waypointTemplate.WaypointTemplateVariableOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetUserEditable">reset_user_editable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_user_editable` <a name="reset_user_editable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.resetUserEditable"></a>

```python
def reset_user_editable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.optionsInput">options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditableInput">user_editable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableTypeInput">variable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditable">user_editable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableType">variable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.optionsInput"></a>

```python
options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_editable_input`<sup>Optional</sup> <a name="user_editable_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditableInput"></a>

```python
user_editable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variable_type_input`<sup>Optional</sup> <a name="variable_type_input" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableTypeInput"></a>

```python
variable_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_editable`<sup>Required</sup> <a name="user_editable" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.userEditable"></a>

```python
user_editable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `variable_type`<sup>Required</sup> <a name="variable_type" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.variableType"></a>

```python
variable_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointTemplateVariableOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointTemplate.WaypointTemplateVariableOptions">WaypointTemplateVariableOptions</a>]

---



