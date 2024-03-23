# `waypointApplicationTemplate` Submodule <a name="`waypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.waypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointApplicationTemplate <a name="WaypointApplicationTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplate(
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
  terraform_cloud_workspace_details: WaypointApplicationTemplateTerraformCloudWorkspaceDetails,
  terraform_no_code_module: WaypointApplicationTemplateTerraformNoCodeModule,
  description: str = None,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.summary">summary</a></code> | <code>str</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformNoCodeModule">terraform_no_code_module</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | Instructions for using the template (markdown format supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.name"></a>

- *Type:* str

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.summary"></a>

- *Type:* str

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformCloudWorkspaceDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `terraform_no_code_module`<sup>Required</sup> <a name="terraform_no_code_module" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformNoCodeModule"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.description"></a>

- *Type:* str

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.projectId"></a>

- *Type:* str

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.readmeMarkdownTemplate"></a>

- *Type:* str

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails">put_terraform_cloud_workspace_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule">put_terraform_no_code_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate">reset_readme_markdown_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terraform_cloud_workspace_details` <a name="put_terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails"></a>

```python
def put_terraform_cloud_workspace_details(
  name: str,
  terraform_project_id: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails.parameter.name"></a>

- *Type:* str

Name of the Terraform Cloud Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

###### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails.parameter.terraformProjectId"></a>

- *Type:* str

Tetraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}

---

##### `put_terraform_no_code_module` <a name="put_terraform_no_code_module" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule"></a>

```python
def put_terraform_no_code_module(
  source: str,
  version: str
) -> None
```

###### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule.parameter.source"></a>

- *Type:* str

No-Code Module Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}

---

###### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule.parameter.version"></a>

- *Type:* str

No-Code Module Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_readme_markdown_template` <a name="reset_readme_markdown_template" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate"></a>

```python
def reset_readme_markdown_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WaypointApplicationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule">terraform_no_code_module</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput">readme_markdown_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput">terraform_cloud_workspace_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput">terraform_no_code_module_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary">summary</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `terraform_no_code_module`<sup>Required</sup> <a name="terraform_no_code_module" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```python
terraform_no_code_module: WaypointApplicationTemplateTerraformNoCodeModuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `readme_markdown_template_input`<sup>Optional</sup> <a name="readme_markdown_template_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput"></a>

```python
readme_markdown_template_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `terraform_cloud_workspace_details_input`<sup>Optional</sup> <a name="terraform_cloud_workspace_details_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```python
terraform_cloud_workspace_details_input: typing.Union[IResolvable, WaypointApplicationTemplateTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>]

---

##### `terraform_no_code_module_input`<sup>Optional</sup> <a name="terraform_no_code_module_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput"></a>

```python
terraform_no_code_module_input: typing.Union[IResolvable, WaypointApplicationTemplateTerraformNoCodeModule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `readme_markdown_template`<sup>Required</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointApplicationTemplateConfig <a name="WaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  summary: str,
  terraform_cloud_workspace_details: WaypointApplicationTemplateTerraformCloudWorkspaceDetails,
  terraform_no_code_module: WaypointApplicationTemplateTerraformNoCodeModule,
  description: str = None,
  labels: typing.List[str] = None,
  project_id: str = None,
  readme_markdown_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name">name</a></code> | <code>str</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary">summary</a></code> | <code>str</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails">terraform_cloud_workspace_details</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule">terraform_no_code_module</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description">description</a></code> | <code>str</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId">project_id</a></code> | <code>str</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate">readme_markdown_template</a></code> | <code>str</code> | Instructions for using the template (markdown format supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary"></a>

```python
summary: str
```

- *Type:* str

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `terraform_cloud_workspace_details`<sup>Required</sup> <a name="terraform_cloud_workspace_details" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```python
terraform_cloud_workspace_details: WaypointApplicationTemplateTerraformCloudWorkspaceDetails
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `terraform_no_code_module`<sup>Required</sup> <a name="terraform_no_code_module" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule"></a>

```python
terraform_no_code_module: WaypointApplicationTemplateTerraformNoCodeModule
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `readme_markdown_template`<sup>Optional</sup> <a name="readme_markdown_template" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate"></a>

```python
readme_markdown_template: str
```

- *Type:* str

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

### WaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails(
  name: str,
  terraform_project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>str</code> | Name of the Terraform Cloud Workspace. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | Tetraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Terraform Cloud Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

Tetraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}

---

### WaypointApplicationTemplateTerraformNoCodeModule <a name="WaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule(
  source: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source">source</a></code> | <code>str</code> | No-Code Module Source. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version">version</a></code> | <code>str</code> | No-Code Module Version. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source"></a>

```python
source: str
```

- *Type:* str

No-Code Module Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version"></a>

```python
version: str
```

- *Type:* str

No-Code Module Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.84.1/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraform_project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraform_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `terraform_project_id_input`<sup>Optional</sup> <a name="terraform_project_id_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```python
terraform_project_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_project_id`<sup>Required</sup> <a name="terraform_project_id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```python
terraform_project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointApplicationTemplateTerraformCloudWorkspaceDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>]

---


### WaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="WaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_hcp import waypoint_application_template

waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WaypointApplicationTemplateTerraformNoCodeModule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>]

---



